const express = require('express');
const md5 = require('md5')
const router = express.Router();
const {postreq,getreset} = require('../controller/reset')

router.route("/:id/:token").get(getreset).post(postreq);

module.exports = router