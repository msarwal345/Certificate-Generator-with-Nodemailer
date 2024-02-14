const mongoose = require('mongoose');
require('dotenv').config();
const uri=process.env.URL;
mongoose.connect(uri)
  .then(() => console.log('DataBase Connected'))
  .catch(() => console.log('Error'));

const newSchema = new mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Fortext : { type: String }
});

const CertModel = mongoose.model('Cert', newSchema);

module.exports = CertModel;
