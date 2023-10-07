const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const courseData = {
  Indonesian: {
    imgSrc: 'https://i.ibb.co/GttgFvw/indonesia.png',
    title: 'Indonesian',
    description:
      'The subject of Bahasa Indonesia at the elementary school level is one of the core subjects that is highly important in the education curriculum. This subject aims to teach students the fundamentals of the Indonesian language, including reading, writing, listening, and speaking. The Bahasa Indonesia subject in elementary school not only helps students to understand the Indonesian language effectively but also develops their communication skills, assists them in becoming proficient readers, and lays a strong foundation for higher-level learning.',
    duration: '2 Months',
    courseMaterials: '7 courses materials',
    videos: '7 Videos',
    teacher: 'Endang Kristiani - Headmaster of Kristen Kalam Kudus School',
    intro: 'Introduction to Indonesian Course',
    students: "+ 50 Student",
    date: "1 - 30 October 2023",
    price: "$ 380",
  },
  Mathematics: {
    imgSrc: "https://i.ibb.co/QMSJg68/mtk.png",
    title: "Mathematics",
    description:
      "The subject of Mathematics at the elementary school level is an integral part of the basic education curriculum in Indonesia. Mathematics helps students understand and develop fundamental skills in counting, measuring, problem-solving, and grasping foundational mathematical concepts. In Mathematics classes at the elementary level, students will learn basics such as addition, subtraction, multiplication, and division, and they will also be introduced to concepts of geometry, measurement, statistics, and probability in simplified forms. The primary goal of this subject is to assist students in developing logical understanding, problem-solving skills, and critical thinking abilities.",
    duration: "3 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Teguh Satya - Teacher of Islamic School South Jakarta",
    intro: "Introduction to Mathematics Course",
    students: "+ 40 Student",
    date: "1 - 30 October 2023",
    price: "$ 680",
  },
  "Natural Sciences": {
    imgSrc: "https://i.ibb.co/CBYnyyz/ipa.png",
    title: "Natural Sciences",
    description:
      "The subject of Natural Sciences at the elementary school level is an important part of the basic education curriculum in Indonesia. Natural Sciences aims to introduce students to a fundamental understanding of nature and natural phenomena around them. In the Natural Sciences class, students will learn about various topics, including natural phenomena such as weather, climate, and seasons, as well as basic concepts in physics, chemistry, biology, and the environment. The primary goal of the Natural Sciences subject at the elementary level is to develop students' basic scientific understanding, teach them critical thinking about the world around them, and cultivate their curiosity. It also helps students understand the importance of preserving the natural environment for a sustainable future.",
    duration: "2.5 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Nurmia Sinta - Teacher of Al Azhar Center School",
    intro: "Introduction to Natural Sciences Course",
    students: "+ 80 Student",
    date: "1 - 30 October 2023",
    price: "$ 380",
  },
  "Social Science": {
    imgSrc: "https://i.ibb.co/Y09mPFn/ips.png",
    title: "Social Science",
    description:
      "The subject of Social Sciences at the elementary school level is one of the essential components of the basic education curriculum in Indonesia. Social Sciences aims to provide students with an understanding of various aspects of social, cultural, economic, and political life. In Social Sciences classes, students will learn about various topics such as history, geography, culture, society, government, and economics. They will grasp how humans live together, form communities, and interact with their environment. The primary goal of the Social Sciences subject at the elementary level is to help students understand the world around them, encourage them to think critically about social issues, and cultivate a sense of responsibility towards their society and country.",
    duration: "2.5 Months",
    courseMaterials: "7 courses materials",
    videos: "7 Videos",
    teacher: "Herry Aswandi - Teacher of Al Azhar Center School",
    intro: "Introduction to Social Science Course",
    students: "+ 90 Student",
    date: "1 - 30 October 2023",
    price: "$ 380",
  },
};

async function seedCourses() {
  try {
    for (const courseTitle in courseData) {
      const courseInfo = courseData[courseTitle];
      await prisma.course.create({
        data: {
          title: courseTitle,
          imgSrc: courseInfo.imgSrc,
          description: courseInfo.description,
          duration: courseInfo.duration,
          courseMaterials: courseInfo.courseMaterials,
          videos: courseInfo.videos,
          teacher: courseInfo.teacher,
          intro: courseInfo.intro,
          students: courseInfo.students,
          date: courseInfo.date,
          price: courseInfo.price,
        },
      });
    }
    console.log('Seed data berhasil diimpor ke database.');
  } catch (error) {
    console.error('Gagal mengimpor seed data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCourses();
