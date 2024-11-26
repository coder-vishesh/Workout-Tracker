const jwt = require('jsonwebtoken')

exports.validateToken = function(req, res) { 
   const token =  req.cookies.token; 
   console.log(token)
    if (!token) {
         return res.status(404).json({success : false})
    }

    try { 
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        res.status(200).json({success : true})
    }catch(err) { 
       return res.status(404).json({success : false, message : "Invalid or expired token"})
    }
       
    
}