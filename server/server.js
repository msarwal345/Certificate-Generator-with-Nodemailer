const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const xlsx=require("xlsx");
const data=require('./model/model');
const controller=require('./controller/controller');
const app=express();

app.use(cors());

app.use('/',controller);

app.listen(5000,()=>{
    console.log('Port Connected');
})
