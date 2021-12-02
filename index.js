const express=require('express');
const app=express();
let port=process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send("HELLo World")
});


app.listen(port,()=>{
    console.log(`Server Started at Port ${port}`);
});