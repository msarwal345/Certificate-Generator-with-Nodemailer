const express = require("express");
const cors = require("cors");
const usercontroller = require('./controller/userController');
const certcontroller = require('./controller/certController');
const app = express();

app.use(cors());

app.use('/', usercontroller); 
app.use('/', certcontroller); 

app.listen(5000, () => {
  console.log('Port Connected');
});
