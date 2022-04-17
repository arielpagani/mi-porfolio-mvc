const express = require('express');
const router = express.Router();
const controladorWeb = require('../controllers/mainController')

router.get('/', controladorWeb.main);


module.exports = router;
