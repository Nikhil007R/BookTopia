const express = require("express");
const app = express();

// initializing env file 
require('dotenv').config();
// db connection 
const db = require("./db/db")

// user route
const user = require("./routes/user");
// book route
const book = require("./routes/book");
// favourite route 
const favourites = require("./routes/favourites")

// port number 
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());

app.get("/", (req, res)=>{
    res.send("Hello world")
})

// creating routes 
app.use("/app/v1/", user);
app.use("/app/v1", book);
app.use("/app/v1", favourites);


app.listen(PORT, ()=>{
    console.log("server started at " + PORT);  
})