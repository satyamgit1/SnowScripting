// // pages/api/send-email.js
// import sgMail from '@sendgrid/mail';

// // Configure SendGrid (you'll need to get an API key)
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { toEmail, fromEmail, subject, content, noteTitle, scriptType } = req.body;

//   try {
//     const msg = {
//       to: toEmail,
//       from: fromEmail, // Use your verified sender in SendGrid
//       subject: subject || `ServiceNow Script: ${noteTitle}`,
//       text: `Script Type: ${scriptType}\n\n${content}`,
//       html: `
//         <div>
//           <h2>${noteTitle}</h2>
//           <p><strong>Type:</strong> ${scriptType}</p>
//           <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">${content}</pre>
//         </div>
//       `,
//     };

//     await sgMail.send(msg);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }



// pages/api/send-email.js
import sgMail from '@sendgrid/mail';

// Configure SendGrid (Make sure to set your API key in the environment variable)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests to this API route
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Destructure data from the request body
  const { toEmail, fromEmail, subject, content, noteTitle, scriptType } = req.body;

  // Input validation
  if (!toEmail || !fromEmail || !content || !noteTitle || !scriptType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Construct the email message
    const msg = {
      to: toEmail,
      from: fromEmail, // Make sure this is a verified sender in SendGrid
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

    // Send the email
    await sgMail.send(msg);

    // Respond with success
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    // Log detailed error for debugging
    console.error('Error sending email:', error);

    // Respond with a generic error message
    if (error.response) {
      console.error('SendGrid Error Response:', error.response.body);
    }
    
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
