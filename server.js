const express =require('express');
const app = express();

const port = 5000;


// app.get("/",(req,res)=>{
//     res.send("hello node class augest node js" )
// })

// app.get("/signup",(req,res)=>{
//     res.send("hello node class augest node js" )
// })
// app.get("/login",(req,res)=>{
//     res.send("login page")
// })

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("<h1>hello node class augest node js </h1>")
})

app.get("/home",(req,res)=>{
    res.render("Home")
})


app.get("/login",(req,res)=>{
    res.render("Login")
})

app.get("/signup",(req,res)=>{
    res.render("Signup")
})





















































app.listen(port,()=>{
    console.log("server start")
})

