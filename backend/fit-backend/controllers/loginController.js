const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.login = async function(req,res){
    const {email, password } = req.body
    console.log(email, password)
    

    try { 
        const isUser = await User.findOne({email : email});
        if(isUser) { 
            //const isPasswordValid = await bcrypt.compare(password, isUser.password)
            if(isUser.password == password) {
                const token = jwt.sign({_id: isUser._id, email : email},process.env.SECRET_KEY,{expiresIn : "1m"})
                res.status(202).json({success : "User logged in", userInfo: isUser,token : token})
            }else { 
                console.log("Check your password")
            }
        }else { 
            console.log("Incorrect Email")
        }
        }catch(err) { 
            res.status(400).json({error : err})
    }
};
