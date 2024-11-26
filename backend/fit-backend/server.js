const express = require("express")
const app = express() 
const mongoose = require("mongoose"); 
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const cors = require("cors")



// Middleware here --- > 
app.use(cookieParser())
app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(express.json())


// Database Integration  
mongoose.connect("mongodb://127.0.0.1:27017/userDb").then(()=> console.log("connected succesfully")).catch((err)=> console.log(err))


// END of the middlewares here.



// <--- All the routers import here --> 
const login = require("./routers/loginRoute")
const signup = require("./routers/signupRoute");
const profile = require('./routers/profileRoute')
const { configDotenv } = require("dotenv");


// Use of imported routes ----> 

app.use('/', login)
app.use('/signup', signup)
app.use("/profile", profile)


app.listen(1234,function(){
    console.log("The server is running on port 1234")

})