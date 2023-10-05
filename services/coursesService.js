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

module.exports = {
    getAllCourses
};