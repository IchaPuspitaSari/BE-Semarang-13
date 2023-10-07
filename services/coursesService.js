const { prisma } = require('../config/prisma');

async function getAllCourses() {
    try {
        const courses = await prisma.course.findMany();

        return courses;
    }catch (error) {
        console.error();

        throw new Error()
    }
}

async function getCourseById(courseId) {
    try {
        const course = await prisma.course.findUnique({
            where: { id: courseId },
        });

        return course;
    } catch (error) {
        console.error(error);
        throw new Error('Gagal mengambil course berdasarkan ID');
    }
}

module.exports = {
    getAllCourses,
    getCourseById
};