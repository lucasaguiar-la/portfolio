const express = require('express');
const router = express.Router();
const { getProjetos } = require('../controllers/projectController');

router.get('/', getProjetos);

module.exports = router;