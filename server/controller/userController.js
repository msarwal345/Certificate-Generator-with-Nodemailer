// userController.js
const express = require('express');
const CertModel = require('../model/model');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

    for (const item of jsonData) {
      const newData = new CertModel(item);
      await newData.save();
    }

    res.json({ success: true, message: 'Data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
