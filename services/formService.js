const { prisma } = require("../config/prisma");

//Get
const getAllForm = async () => {
  try {
    const form = prisma.form.findMany();
    return form;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Post
const createForm = async (form) => {
  try {
    const createdForm = await prisma.form.create({
      data: {
        nama: form.nama,
        email: form.email,
        message: form.message,
      },
    });

    // Menampilkan log ketika pesan berhasil terkirim
    console.log("Message sent successfully!");

    return createdForm;
  } catch (error) {
    console.error(error);

    // Menampilkan pesan kesalahan ke console
    console.log("Error in createForm:", error);

    return error;
  }
};


module.exports = { createForm, getAllForm };
