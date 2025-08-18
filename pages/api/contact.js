import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact attempts from this IP, please try again later'
});

async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  try {
    await runMiddleware(req, res, limiter);
    
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Enhanced email template with ServiceNow color theme
    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body { 
          font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif; 
          background: linear-gradient(135deg, #F4F6F9 0%, #E8EBF2 100%); 
          margin: 0;
          padding: 0;
          animation: fadeIn 1s ease-in-out;
        }
        .container { 
          max-width: 700px; 
          margin: 40px auto; 
          padding: 0;
          background: #FFFFFF;
          border-radius: 16px; 
          box-shadow: 0 15px 30px rgba(0, 97, 242, 0.15);
          animation: slideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          border: 1px solid rgba(0, 163, 224, 0.2);
        }
        .header { 
          color: #FFFFFF; 
          font-size: 28px; 
          text-align: center;
          background: linear-gradient(135deg, #0061F2 0%, #00A3E0 100%); 
          padding: 25px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 97, 242, 0.3);
          position: relative;
          overflow: hidden;
        }
        .header:after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(
            to bottom right, 
            rgba(255,255,255,0.3) 0%, 
            rgba(255,255,255,0) 60%
          );
          transform: rotate(30deg);
          animation: shine 3s infinite;
        }
        .content {
          padding: 30px;
        }
        .field { 
          margin-bottom: 25px; 
          font-size: 16px; 
          color: #4B4F54; 
          padding-bottom: 15px;
          border-bottom: 1px dashed #E0E4E9;
          transition: all 0.3s ease;
        }
        .field:hover {
          transform: translateX(5px);
          border-bottom-color: #00A3E0;
        }
        .field-label { 
          font-weight: 600; 
          color: #0061F2; 
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 8px;
        }
        .field-value {
          color: #2D3748;
          font-size: 16px;
          line-height: 1.6;
        }
        .message-container { 
          background: linear-gradient(to right, #F4F6F9 0%, #F9FBFC 100%); 
          padding: 25px; 
          border-radius: 12px;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
          border-left: 4px solid #00A3E0;
          color: #333;
          font-size: 15px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease-out;
        }
        .message {
          white-space: pre-wrap;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 14px;
          color: #718096;
          background: #F4F6F9;
          margin-top: 30px;
          border-radius: 0 0 16px 16px;
        }
        .highlight {
          color: #0061F2;
          font-weight: 600;
        }
        a.email-link { 
          color: #00A3E0; 
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: rgba(0, 163, 224, 0.1);
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
        }
        a.email-link:hover { 
          color: #FFFFFF; 
          background: #0061F2;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 97, 242, 0.2);
        }

        /* Keyframes for animations */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideIn {
          0% { transform: translateY(-30px) scale(0.98); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(30deg); }
          20% { transform: translateX(100%) rotate(30deg); }
          100% { transform: translateX(100%) rotate(30deg); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 163, 224, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(0, 163, 224, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 163, 224, 0); }
        }

        .pulse {
          animation: pulse 2s infinite;
          border-radius: 50%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          ✨ SnowScripting Contact Form Submission ✨
        </div>
        
        <div class="content">
          <div class="field">
            <span class="field-label">From</span>
            <span class="field-value">${name}</span>
          </div>
          
          <div class="field">
            <span class="field-label">Email Address</span>
            <span class="field-value">
              <a href="mailto:${email}" class="email-link">${email}</a>
            </span>
          </div>
          
          <div class="field">
            <span class="field-label">Subject</span>
            <span class="field-value highlight">${subject}</span>
          </div>
          
          <div class="field">
            <span class="field-label">Message</span>
            <div class="message-container">
              <div class="message">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          This message was sent from your website contact form. 
          <br>Reply to this email to respond directly to ${name}.
        </div>
      </div>
    </body>
    </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 New Inquiry on Snow Scripting: ${subject}`,
      text: `
        You have received a new message from your website contact form.

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: emailHtml,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High'
      }
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending message' });
  }
}