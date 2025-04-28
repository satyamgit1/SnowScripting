// pages/api/send-email.js
import sgMail from '@sendgrid/mail';

// Configure SendGrid (you'll need to get an API key)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { toEmail, fromEmail, subject, content, noteTitle, scriptType } = req.body;

  try {
    const msg = {
      to: toEmail,
      from: fromEmail, // Use your verified sender in SendGrid
      subject: subject || `ServiceNow Script: ${noteTitle}`,
      text: `Script Type: ${scriptType}\n\n${content}`,
      html: `
        <div>
          <h2>${noteTitle}</h2>
          <p><strong>Type:</strong> ${scriptType}</p>
          <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">${content}</pre>
        </div>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}