const express = require('express');

const router = express.Router();

const home = (req,res)=>{
    res.render('/home') 
}

router.route("/").get(home);

module.exports = router;