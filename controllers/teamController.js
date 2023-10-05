const { teamService } = require('../services');

async function getTeam(req, res) {
    const team = await teamService.getAllTeam();

    res.status(200).json(team);
}

module.exports = {
    getTeam
};