const express = require("express");
const serverless = require("serverless-http"); // ✅ Correctly wrap Express for Netlify
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 50,
});

app.post("/send-email", async (req, res) => {
  const { Email, YourName, Phone, MessageUs } = req.body.content;

  if (!Email || !YourName || !Phone || !MessageUs) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const supportEmail = {
      from: Email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request from ${YourName}`,
      html: `<p><strong>Name:</strong> ${YourName}</p>
             <p><strong>Email:</strong> ${Email}</p>
             <p><strong>Phone:</strong> ${Phone}</p>
             <p><strong>Message:</strong> ${MessageUs}</p>`,
    };

    const userConfirmation = {
      from: process.env.EMAIL_USER,
      to: Email,
      subject: "Thank you for reaching out!",
      html: `<p>Hi ${YourName},</p>
             <p>We have received your message and will get back to you soon.</p>
             <p>Best regards,</p>
             <p><strong>Nova Counselling & Psychotherapy Team</strong></p>`,
    };

    await Promise.all([
      transporter.sendMail(supportEmail),
      transporter.sendMail(userConfirmation),
    ]);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.post("/contact", async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Nova Counselling & Psychotherapy!",
      html: `<p>Thank you for reaching out. We will get back to you as soon as possible.</p>`,
    };

    const adminNotification = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Request",
      html: `<p><strong>New Contact Request</strong></p>
             <p><strong>Email:</strong> ${email}</p>`,
    };

    await Promise.all([
      transporter.sendMail(confirmationEmail),
      transporter.sendMail(adminNotification),
    ]);

    res.json({ message: "Thank you for contacting us. We will reach out to you soon." });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Wrap Express app with serverless-http for Netlify
module.exports.handler = serverless(app);
