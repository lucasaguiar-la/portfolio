const express = require('express');
const router = express.Router();
const  { handleEmailForm } = require('../controllers/emailController');

router.post('/send', handleEmailForm);

module.exports = router;