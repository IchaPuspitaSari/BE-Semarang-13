const { coursesService } = require('../services');

async function getCourses(req, res) {
    const course = await coursesService.getAllCourses();

    res.status(200).json(course);
}

module.exports = {
    getCourses
};