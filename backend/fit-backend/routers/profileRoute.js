const express = require("express"); 

const router = express.Router()

const { validateToken } = require("../controllers/tokenValidation")

router.get('/',validateToken)

module.exports = router; 