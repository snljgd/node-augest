const express =require('express');
const app = express();

const port = 5000;
app.get("/",(req,res)=>{
    res.send("hello node class augest node js" )
})

app.get("/signup",(req,res)=>{
    res.send("hello node class augest node js" )
})
app.get("/login",(req,res)=>{
    res.send("login page")
})



app.listen(po,()=>{
    console.log("server start")
})

