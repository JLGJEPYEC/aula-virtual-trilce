const express = require("express");
const router = express.Router();

const Profesor  = require("../controllers/profesor.controller");

router.get("/", Profesor.getAllProfesores);

router.post("/", Profesor.createProfesor);

router.get("/:id", Profesor.getProfesorById);

router.put("/:id", Profesor.editProfesor);

router.delete("/:id", Profesor.deleteProfesor);

module.exports = router;