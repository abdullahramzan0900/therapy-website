require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host:process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT, // 🔥 Faster than 465
  secure: false, // Use TLS instead of SSL
  requireTLS: true, // Ensure TLS encryption
  auth: {
    user: process.env.EMAIL_USER, // Your GoDaddy email
    pass: process.env.EMAIL_PASS, // Your GoDaddy email password
  },
  pool: true, // 🔥 Enables connection reuse
  maxConnections: 5, // Keep up to 5 active connections
  maxMessages: 50, // Reuse each connection for 10 emails
});

app.post("/send-email", (req, res) => {
  const { Email, YourName, Phone, MessageUs } = req.body.content;

  if (!Email || !YourName || !Phone || !MessageUs) {
    return res.status(400).json({ error: "All fields are required" });
  }


  res.json({ success: true, message: "Email is being sent" });


  (async () => {
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
        html: `<div style="font-family: Arial, sans-serif; color: #333;">
                 <h2 style="color: #2c3e50;">Thank you for contacting Nura Counselling & Psychotherapy!</h2>
                 <p style="font-size: 16px;">Hi ${YourName},</p>
                 <p style="font-size: 16px;">We have received your message and will get back to you soon.</p>
                 <p style="font-size: 16px;">Best regards,</p>
                 <p style="font-size: 16px; font-weight: bold;">Nura Counselling & Psychotherapy Team</p>
               </div>`,
      };

      await Promise.all([
        transporter.sendMail(supportEmail),
        transporter.sendMail(userConfirmation),
      ]);

      console.log("Emails sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  })();
});
app.post("/contact", async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {


;

    // ✅ Confirmation Email to the User
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Nova Counselling & Psychotherapy!",
      html: `<p>Thank you for reaching out. We will get back to you as soon as possible.</p>`,
    };

    // ✅ Notification Email to Admin
    const adminNotification = {
      from: email,
      to: process.env.EMAIL_USER, // Admin Email (Set in .env)
      subject: "New Contact Request",
      html: `<p><strong>New Contact Request</strong></p>
             <p><strong>Email:</strong> ${email}</p>`,
    };

    await Promise.all([
      transporter.sendMail(confirmationEmail),
      transporter.sendMail(adminNotification),
    ]);

    return res.json({ message: "Thank you for contacting us. We will reach out to you soon." });
  } catch (error) {
    console.error("Contact Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
