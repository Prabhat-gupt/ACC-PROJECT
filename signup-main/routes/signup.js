const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const {verifyToken} = require('../middleware/auth')
// const auth = require('./middleware/auth')
const userSchema = require("../model/User");
const {
    getRegister,
    postRegister
} = require('../controller/signup');


router.route("/").get(verifyToken,getRegister).post(postRegister);

module.exports = router