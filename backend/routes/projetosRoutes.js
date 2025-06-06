const express = require('express');
const router = express.Router();
const { getProjetos } = require('../controllers/projetosController');

router.get('/', getProjetos);

module.exports = router;