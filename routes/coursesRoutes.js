const express = require('express');
const { coursesController } = require('../controllers');
const router = express.Router();

// routes home
router.get('/index', coursesController.getCourses);

// views courses routes
router.get('/views/courses', coursesController.getCourses);

// view courseview routes
router.get('/views/courseview', coursesController.getCourses);

// Rute untuk mendapatkan course berdasarkan ID menggunakan query parameter
router.get('/views/courseview.html', coursesController.getCourseById);

module.exports = router;