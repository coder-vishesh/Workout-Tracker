const { response } = require("express");
const User = require("../models/userModel")



exports.handleSignup = async function(req, res){ 
    const {email, password, fName, lName } = req.body; 
    console.log(email, password, fName, lName)
    

    try { 
        const existingUser = await User.findOne({email : email}); 
        if(existingUser) { 
            return res.status(404).json({message: "Email is already registered try to login"})
        }
        const user = new User({ 
            fName : fName, 
            lName : lName, 
            email : email, 
            password : password
        }); 
        await user.save() 
        res.status(200).json({message: "New User created succesfuly"})
    } catch(err) { 
        console.log(err)
       res.status(500).json({message: "erro while creating new user"})
    }

   


}