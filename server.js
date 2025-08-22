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

// set views forlder 

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("Welcome  node Page")
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

// public folder
app.use(express.static("public"))


















































// server port no set 
app.listen(port,()=>{
    console.log("server start")
})

