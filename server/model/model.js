const mongoose = require('mongoose');
const config=require('config');
const uri=config.get('url')

mongoose.connect(uri)
  .then(() => console.log('DataBase Connected'))
  .catch(() => console.log('Error'));

const newSchema = new mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Mobile: { type: Number } 
});

const CertModel = mongoose.model('Cert', newSchema);

module.exports = CertModel;
