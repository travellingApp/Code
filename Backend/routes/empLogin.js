const express = require('express');
const router = express.Router();

const empLogin = require ('../controllers/empLogin');

router.post('/login',empLogin);

module.exports = router;