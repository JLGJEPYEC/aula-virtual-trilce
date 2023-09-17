const express = require("express");
const router = express.Router();

const curso = require("../controllers/curso.controller");

router.get("/", curso.getAllCursos);

router.post("/", curso.createCurso);

router.get("/:id", curso.getCursoById);

router.put("/:id", curso.editCurso);

router.delete("/:id", curso.deleteCurso);

module.exports = router;