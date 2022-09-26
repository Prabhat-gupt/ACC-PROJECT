const express = require('express');

const router = express.Router();

const logoutreq = (req,res)=>{
    res.cookie(auth,'',{maxAge: 1});
    res.cookie(dele,true)
    res.redirect('/');
}

router.route("/").get(logoutreq);

module.exports = router;