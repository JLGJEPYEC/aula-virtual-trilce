const express = require("express");
const router = express.Router();

const estudiante  = require("../controllers/estudiante.controller");

router.get("/", estudiante.getAllestudiantes);

router.post("/", estudiante.createestudiante);

router.get("/:id", estudiante.getestudianteById);

router.put("/:id", estudiante.editestudiante);

router.delete("/:id", estudiante.deleteestudiante);

module.exports = router;