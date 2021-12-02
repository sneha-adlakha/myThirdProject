const express=require('express');
const app=express();
let port=process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send("HELLo World")
});
app.get("/users",(req,res)=>{
    res.send("Users Axxessed")
})
app.listen(port,()=>{
    console.log(`Server Started at Port ${port}`);
});