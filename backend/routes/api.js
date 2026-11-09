const express = require('express');
const router = express.Router();
const portfolioData = require('../data/portfolio.json');
const nodemailer = require('nodemailer');

// Get portfolio data
router.get('/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Contact form endpoint
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Configure nodemailer (you need to set up your email credentials)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'moiseniyobuhungiro011@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;