const express = require('express');
const { teamController } = require('../controllers');
const router = express.Router();

// team routes
router.get('/views/about', teamController.getTeam);

module.exports = router;