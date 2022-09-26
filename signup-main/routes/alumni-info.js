const express = require('express');
const {verifyToken} = require('../middleware/auth')
const router = express.Router();


const alumni =(req,res)=>{
    res.status(200).redirect('/alumni-info');
}

router.route("/").get(verifyToken,alumni);

module.exports = router;