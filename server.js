
const express = require('express');
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

app.set("view engine", "ejs");



app.get("/home", (req, res) => {
    res.render("Home")
})


app.get("/", (req, res) => {
    res.render("Login")
})

app.get("/signup", (req, res) => {
    res.render("Signup")
})

app.get("/forgot", (req, res) => {
    res.render("Forgot")
})

app.get("/delete",(req,res)=>{
    res.render("Delete")
})

app.get("/signup.ejs",(req,res)=>{
    res.render("signup.ejs")
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
async function groot() {
    let a = await client.connect()
    let b = a.db("nodedata")
    let c = b.collection("users")
    let result = await c.find({}).toArray()
    console.log(result);
}

// mongodb data insert api
app.post("/signup", async (req, res) => {

    let a = await client.connect()
    let b = a.db("nodedata")
    let c = b.collection("users")

    let result = await c.insertOne(req.body).then(() => {
        res.redirect("/login");
    })
})


// login api 
app.post("/login", async (req, res) => {

    let a = await client.connect()
    let b = a.db("nodedata")
    let c = b.collection("users")
    let result = await c.find({ "email": req.body.email, "password": req.body.password }).
        toArray().
        then((result) => {
            if (result.length > 0) {
                res.redirect("/home");
            } else {
                res.send("enter valid email and password");
            }
        })
})


// forgotpassword -------------

app.post("/forgot", async (req, res) => {
    let a = await client.connect()
    let b = await a.db("nodedata")
    let c = await b.collection("users")
    let result = await c.updateOne(
        {"email": req.body.email},
        { $set: {"password": req.body.password } }).then(() => {
            res.render("Login");
        })
})

// delete account api 
app.post("/delete",async(req,res)=>{
     let a = await client.connect()
    let b = await a.db("nodedata")
    let c = await b.collection("users")
    let result = await c.findOneAndDelete(
        {"email": req.body.email},
        { $set: {"password": req.body.password } }).then(() => {
            res.render("Login");
        })
})


































// server port no set 
app.listen(port, () => {
    console.log("server run start")
})