const mongoose=require('mongoose');
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const app=express();
const router=express.Router();

let port=process.env.PORT||3000;

const {initialiseDB}=require("./db.connect");
initialiseDB();
app.get("/",(req,res)=>{
    res.send("HELLo World")
});

app.listen(port,()=>{
    console.log(`Server Started at Port ${port}`);
});