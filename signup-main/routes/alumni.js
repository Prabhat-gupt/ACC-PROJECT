const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/auth');
const {alumicheck} = require('../middleware/checkuser');
const {postreq,getreq} = require('../controller/alumni');

router.route("/:id").get(verifyToken,alumicheck,getreq).post(verifyToken,alumicheck,postreq);

module.exports = router