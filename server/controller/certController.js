const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const express = require('express');
const CertModel = require('../model/model'); 
const config=require('config');
const password=config.get('pass')
const email=config.get('user')

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const getCertificateHTML = (record) => {
  return `
    <html>
      <body>
        <h1>Certificate of Completion</h1>
        <p>This is to certify that ${record.Name} has completed the course.</p>
        <p>Email: ${record.Email}</p>
        <p>Mobile: ${record.Mobile}</p>
      </body>
    </html>
  `;
};

router.get("/send-certificates", async (req, res) => {
  try {
    const data = await CertModel.find();
    console.log('Fetched data:', data);

    if (data.length === 0) {
      return res.json({ success: false, message: 'No data to process' });
    }

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const record of data) {
      const certificateHTML = getCertificateHTML(record);

      await page.setContent(certificateHTML);

      const pdfBuffer = await page.pdf({ format: 'A4' });

      const pdfFileName = `${record.Name}_certificate.pdf`;

      await transporter.sendMail({
        from: email,
        to: record.Email,
        subject: 'Certificate',
        text: 'Congratulations on Getting the Certificate!',
        attachments: [
          {
            filename: pdfFileName,
            content: pdfBuffer,
          },
        ],
      });

      console.log(`Certificate sent to ${record.Email}.`);
    }

    await browser.close();
    console.log('Certificates generated and emails sent successfully!');

    await CertModel.deleteMany({});
    console.log('All records deleted from the database.');

    res.json({ success: true, message: 'Certificates generated, emails sent, and records deleted successfully' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;