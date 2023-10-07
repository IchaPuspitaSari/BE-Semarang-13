const { coursesService } = require('../services');

async function getCourses(req, res) {
    const course = await coursesService.getAllCourses();

    res.status(200).json(course);
}

async function getCourseById(req, res) {
    const courseId = parseInt(req.query.course); // Ambil ID dari query parameter
    try {
        const course = await coursesService.getCourseById(courseId);

        if (!course) {
            res.status(404).json({ error: 'Course tidak ditemukan' });
            return;
        }

        res.status(200).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil course' });
    }
}

module.exports = {
    getCourses,
    getCourseById
};