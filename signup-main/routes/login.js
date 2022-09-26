const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const {verifyToken} = require('../middleware/auth')
const { PostLogin,log } = require('../controller/login');

router.route("/").post(PostLogin)

module.exports = router