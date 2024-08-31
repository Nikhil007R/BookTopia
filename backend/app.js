const express = require("express");
const app = express();

// initializing env file 
require('dotenv').config();

// db connection 
const db = require("./db/db")

// port number 
const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log("server started at " + PORT);  
})