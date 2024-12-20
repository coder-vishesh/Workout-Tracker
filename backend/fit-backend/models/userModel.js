const mongoose = require("mongoose"); 

const userSchema = mongoose.Schema({ 
    fName : { 
        type : String, 
        required: true, 
    },
    lName : { 
        type : String, 
        required: true
    }, 
    email : { 
        type : String, 
        required : true, 
        unique: true
        
    }, 
    password : { 
        type : String, 
        required : true, 
        
    }
})

const User = new mongoose.model("User", userSchema); 

module.exports = User