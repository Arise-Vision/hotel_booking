import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { name, email, message } = req.body;

  try {
    // Send email using a library like nodemailer or emailjs
    // For example:
    const transporter = nodemailer.createTransport({
      host: 'your-email-host',
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: 'your-email-username',
        pass: 'your-email-password',
      },
    });

    const mailOptions = {
      from: email,
      to: 'hotel-power-king@example.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Thank you for contacting us!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending email' });
  }
}