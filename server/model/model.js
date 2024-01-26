const mongoose = require('mongoose');

uri = "mongodb+srv://mani:gearfive@cluster0.kxdqrri.mongodb.net/Cert";

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
