const express = require("express");
const router = express.Router();

const examen  = require("../controllers/examen.controller");

router.get("/", examen.getAllExamenes);

router.post("/", examen.createExamen);

router.get("/:id", examen.getExamenById);

router.put("/:id", examen.editExamen);

router.delete("/:id", examen.deleteExamen);

module.exports = router;