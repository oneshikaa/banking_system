const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001; // Change port if needed

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Endpoint for emailing the statement
app.post('/email-statement', async (req, res) => {
  const { email, statementPdf } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'vans98961@gmail.com',
      pass: 'vans@123'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your Account Statement',
    text: 'Please find attached your account statement.',
    attachments: [
      {
        filename: 'account-statement.pdf',
        content: statementPdf,
        encoding: 'base64'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
