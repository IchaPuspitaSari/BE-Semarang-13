const express = require('express');
const { coursesController } = require('../controllers');
const router = express.Router();

// get all courses
router.get('/courses', coursesController.getCourses);

// // Create a new user
// userRoutes.post('/', userController.createUser);

// // Get a user by ID
// userRoutes.get('/:userId', userController.getUserById);

// // Update a user by ID
// userRoutes.put('/:userId', userController.updateUserById);

// // Delete a user by ID
// userRoutes.delete('/:userId', userController.deleteUserById);

module.exports = router;