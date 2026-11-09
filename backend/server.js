const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages sent. Please try again later.' }
});

// Portfolio Data with updated Instagram
const portfolioData = {
  name: "Moise NIYOBUHUNGIRO",
  title: "Software Developer",
  bio: "Passionate software developer from Rwanda with expertise in web development, photography, and frags design. Creating innovative solutions that make a difference.",
  location: "Bugesera District, Eastern Province, Ntarama Sector",
  email: "moiseniyobuhungiro011@gmail.com",
  phone: "0793203618",
  instagram: "__m_o_n_i__011", // Updated Instagram
  github: "https://github.com/moise",
  education: [
    { school: "Nyirarukobwa Primary School", level: "Primary Education", period: "Started studies here" },
    { school: "Nyirarukobwa", level: "Ordinary Level (O'Level)", period: "Continued studies" },
    { school: "Runda TSS", level: "Secondary School", period: "Completed secondary education" }
  ],
  skills: {
    development: ["React", "JavaScript", "Node.js", "Express", "Tailwind CSS", "HTML/CSS", "Python", "Git"],
    design: ["UI/UX Design", "Figma", "Adobe Photoshop", "Canva"],
    photography: ["Portrait Photography", "Event Photography", "Photo Editing"]
  },
  projects: [
    { 
      title: "Portfolio Website", 
      description: "Personal portfolio built with React and Tailwind CSS", 
      technologies: ["React", "Tailwind CSS", "Node.js", "Express"], 
      status: "Completed",
      github: "#",
      demo: "#"
    },
    { 
      title: "Photography Gallery", 
      description: "Gallery showcasing photography work", 
      technologies: ["React", "CSS", "Firebase"], 
      status: "In Development",
      github: "#",
      demo: "#"
    },
    { 
      title: "Frag Design Studio", 
      description: "Design studio for fragrance packaging and branding", 
      technologies: ["Adobe Suite", "Figma"], 
      status: "Planning",
      github: "#",
      demo: "#"
    }
  ]
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.post('/api/contact', limiter, async (req, res) => {
  const { name, email, message, phone } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: portfolioData.email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #6C63FF, #00D4FF); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f5f5f5; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #333; }
            .value { color: #555; }
            .footer { text-align: center; padding: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Message</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              ${phone ? `<div class="field"><div class="label">Phone:</div><div class="value">${phone}</div></div>` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from portfolio website</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again.' 
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Portfolio data: http://localhost:${PORT}/api/portfolio`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});