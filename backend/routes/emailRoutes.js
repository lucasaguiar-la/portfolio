const express = require('express');
const router = express.Router();
const  { handleEmailForm } = require('../controllers/emailController');

router.post('/submit-form', handleEmailForm);

module.exports = router;