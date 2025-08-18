import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import formidable from 'formidable';
import fs from 'fs';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many submission attempts from this IP, please try again later'
});

async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false, // Disables the default body parser to handle FormData
  },
};

export default async function handler(req, res) {
  try {
    // Apply rate limiting
    await runMiddleware(req, res, limiter);
    
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        success: false,
        message: 'Method not allowed' 
      });
    }

    // Parse form data
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.maxFileSize = 5 * 1024 * 1024; // 5MB limit
    form.multiples = false; // Only allow single file upload

    const formData = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Form parsing error:', err);
          if (err.code === formidable.errors.maxFileSizeExceeded) {
            return reject(new Error('File size exceeds 5MB limit'));
          }
          return reject(new Error('Failed to parse form data'));
        }
        resolve({ fields, files });
      });
    });

    console.log('Form data received:', {
      fields: formData.fields,
      files: formData.files ? Object.keys(formData.files) : null
    });

    const { name, email, phone, position, experience, message } = formData.fields;
    const resume = formData.files?.resume;

    // Validate required fields
    if (!name || !email || !position || !experience || !resume) {
      return res.status(400).json({ 
        success: false,
        message: 'All required fields must be filled' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please enter a valid email address' 
      });
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resume.type)) {
      return res.status(400).json({ 
        success: false,
        message: 'Only PDF and Word documents are allowed' 
      });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log('Server is ready to take our messages');
    } catch (verifyError) {
      console.error('SMTP connection error:', verifyError);
      throw new Error('Failed to connect to email server');
    }

    // Read the resume file
    let resumeData;
    try {
      resumeData = fs.readFileSync(resume.path);
    } catch (readError) {
      console.error('Error reading resume file:', readError);
      throw new Error('Failed to process resume file');
    }

    // Email template (same as before)
    const emailHtml = `...`; // Your HTML template here

    // Email options
    const mailOptions = {
      from: `"Career Portal" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📄 New Application: ${name} for ${position}`,
      html: emailHtml,
      attachments: [
        {
          filename: resume.name || 'resume.pdf',
          content: resumeData,
          contentType: resume.type
        }
      ],
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High'
      }
    };

    // Send the email
    const emailResponse = await transporter.sendMail(mailOptions);
    console.log('Email sent:', emailResponse.messageId);

    // Delete the temporary file
    try {
      fs.unlinkSync(resume.path);
      console.log('Temporary file deleted');
    } catch (unlinkError) {
      console.error('Error deleting temporary file:', unlinkError);
      // Not critical enough to fail the request
    }

    return res.status(200).json({ 
      success: true,
      message: 'Application submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing application:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    // Specific error messages for client
    let clientMessage = 'Error processing application';
    if (error.message.includes('File size exceeds')) {
      clientMessage = 'File size exceeds 5MB limit';
    } else if (error.message.includes('Failed to parse')) {
      clientMessage = 'Invalid form data submitted';
    } else if (error.message.includes('email server')) {
      clientMessage = 'Temporarily unable to process applications';
    }

    return res.status(500).json({ 
      success: false,
      message: clientMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}