const Curso = require("../models/curso");

const CursoController = {};

CursoController.getAllCursos = async (req, res, next) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
};

CursoController.getCursoById = async (req, res, next) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el curso" });
  }
};

CursoController.createCurso = async (req, res, next) => {
  try {
    const { grado, seccion, local, nombre_curso } = req.body;
    const nuevoCurso = new Curso({
      grado,
      seccion,
      local,
      nombre_curso,
    });
    await nuevoCurso.save();
    res.status(201).json({ mensaje: "Curso creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el curso" });
  }

};

CursoController.editCurso = async (req, res, next) => {
  const { id } = req.params;
  await Curso.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Curso actualizado" });
};

CursoController.deleteCurso = async (req, res, next) => {
  await Curso.findByIdAndRemove(req.params.id);
  res.json({ status: "Curso eliminado" });
};

module.exports = CursoController;
