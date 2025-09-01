
const express =require('express');
const app = express();

const port = 5000;

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());


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



// api get

// app.get("/users",(req,res)=>{
//     res.send({
//         "name":"John Doe",
//         "email":"john@example.com"
//     })
// }) 
 

// post api




// mongodb---------------------
const { MongoClient } = require('mongodb');
let client = new MongoClient("mongodb://0.0.0.0:27017");

// a function for mongodb connection 
async function groot(){
    let a= await client.connect()
    let b= a.db("nodedata")
    let c= b.collection("users")
    let result = await c.find({}).toArray()
    console.log(result);
}


app.post("/signup",async (req,res)=>{

    let a= await client.connect()
    let b= a.db("nodedata")
    let c= b.collection("users")

    let result = await c.insertOne(req.body).then(()=>{
        res.redirect("/login");
    })
    // console.log(req.body);
})

   






































// server port no set 
app.listen(port,()=>{
    console.log("server run start")
})

