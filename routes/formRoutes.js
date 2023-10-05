const express = require("express");
const { formController } = require("../controllers");
const router = express.Router();

router.get("/", formController.getAllForm);
router.post("/index", formController.createForm);

module.exports = router;
