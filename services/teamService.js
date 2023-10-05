const { prisma } = require('../config/prisma');

async function getAllTeam() {
    try {
        const team = await prisma.team.findMany();

        return team;
    }catch (error) {
        console.error();

        throw new Error()
    }
}

module.exports = {
    getAllTeam
};