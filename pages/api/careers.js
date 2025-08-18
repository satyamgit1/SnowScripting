import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many submissions from this IP, please try again later'
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
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    await runMiddleware(req, res, limiter);
    
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        success: false,
        message: 'Method not allowed' 
      });
    }

    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.maxFileSize = 5 * 1024 * 1024;
    form.multiples = false;

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

    console.log('Received form data:', {
      fields: formData.fields,
      file: formData.files?.resume ? {
        name: formData.files.resume.originalFilename,
        type: formData.files.resume.mimetype,
        size: formData.files.resume.size
      } : null
    });

    const { name, email, phone, position, experience, message } = formData.fields;
    const resume = formData.files?.resume;

    // Validation
    if (!name || !email || !position || !experience || !resume) {
      return res.status(400).json({ 
        success: false,
        message: 'All required fields must be filled' 
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please enter a valid email address' 
      });
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resume.mimetype)) {
      return res.status(400).json({ 
        success: false,
        message: 'Only PDF and Word documents are allowed' 
      });
    }

    // Configure transporter with more robust settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (error) {
      console.error('SMTP connection failed:', error);
      throw new Error('Failed to connect to email server');
    }

    // Read file
    let resumeData;
    try {
      resumeData = fs.readFileSync(resume.filepath);
    } catch (error) {
      console.error('File read error:', error);
      throw new Error('Failed to process resume file');
    }

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2563eb;">New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        ${message ? `<div style="margin-top: 15px;">
          <h3 style="color: #2563eb;">Cover Letter:</h3>
          <p>${message}</p>
        </div>` : ''}
      </div>
    `;

    // Send email
    try {
      const info = await transporter.sendMail({
        from: `"Career Portal" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `New Application: ${name} for ${position}`,
        html: emailHtml,
        attachments: [{
          filename: resume.originalFilename || 'resume.pdf',
          content: resumeData,
          contentType: resume.mimetype
        }]
      });

      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Email send error:', error);
      throw new Error('Failed to send email');
    } finally {
      // Clean up file
      try {
        fs.unlinkSync(resume.filepath);
      } catch (error) {
        console.error('File cleanup error:', error);
      }
    }

    return res.status(200).json({ 
      success: true,
      message: 'Application submitted successfully' 
    });
    
  } catch (error) {
    console.error('API Error:', error.message);
    
    let clientMessage = 'An error occurred while processing your application';
    if (error.message.includes('File size exceeds')) {
      clientMessage = 'File size exceeds 5MB limit';
    } else if (error.message.includes('email server')) {
      clientMessage = 'Temporarily unable to process applications';
    }

    return res.status(500).json({ 
      success: false,
      message: clientMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}