const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { Postforget,forget } = require('../controller/forget-password');

router.route("/").get(forget).post(Postforget);

module.exports = router