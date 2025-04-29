import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    const msg = {
      to: process.env.CONTACT_FORM_RECIPIENT || 'satyamsinghwork1@gmail.com',
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);
    
    // Send confirmation to the user
    const userMsg = {
      to: email,
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      subject: `We've received your message`,
      text: `Thank you for contacting us. We'll get back to you soon regarding: "${subject}"`,
      html: `
        <div>
          <h2>Thank you for contacting us</h2>
          <p>We've received your message regarding <strong>${subject}</strong> and will get back to you soon.</p>
          <p>Here's what you sent us:</p>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };
    
    await sgMail.send(userMsg);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
}