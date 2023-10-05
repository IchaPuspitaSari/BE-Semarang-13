const express = require('express');
const { coursesController } = require('../controllers');
const router = express.Router();

// routes home
router.get('/index', coursesController.getCourses);

// views courses routes
router.get('/views/courses', coursesController.getCourses);

// view courseview routes
router.get('/views/courseview', coursesController.getCourses);

module.exports = router;