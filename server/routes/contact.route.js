import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  
  const { name, email, message } = req.body;
  console.log(req.body);

  try {
    // configure transporter with your Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not your Gmail password)
      },
    });

    // mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // your Gmail to receive message
      subject: `New Contact Form Message from ${name}`,
      text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // send email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send email", error });
  }
});

export default router;
