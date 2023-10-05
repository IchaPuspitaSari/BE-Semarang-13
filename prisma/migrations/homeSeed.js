const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const popularCourseData = [
  {
    name: "Indonesian",
    students: "+ 50 Student",
    date: "1 - 30 October 2023",
    instructor: "Endang Kristiani - Headmaster of Kristen Kalam Kudus School",
    price: "$ 380",
    image: "indonesia.png",
  },
  {
    name: "Mathematics",
    students: "+ 40 Student",
    date: "1 - 30 October 2023",
    instructor: "Teguh Satya - Teacher of Islamic School South Jakarta",
    price: "$ 680",
    image: "mtk.png",
  },
  {
    name: "Natural Sciences",
    students: "+ 80 Student",
    date: "1 - 30 October 2023",
    instructor: "Nurmia Sinta - Teacher of Al Azhar Center School",
    price: "$ 380",
    image: "ipa.png",
  },
  {
    name: "Social Science",
    students: "+ 90 Student",
    date: "1 - 30 October 2023",
    instructor: "Herry Aswandi - Teacher of Al Azhar Center School",
    price: "$ 380",
    image: "ips.png",
  },
];

async function seedPopularCourses() {
  try {
    for (const course of popularCourseData) {
      await prisma.popularCourse.create({
        data: {
          name: course.name,
          students: course.students,
          date: course.date,
          instructor: course.instructor,
          price: course.price,
          image: course.image,
        },
      });
    }
    console.log('Data popular course berhasil diimpor ke database.');
  } catch (error) {
    console.error('Gagal mengimpor data popular course:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedPopularCourses();
