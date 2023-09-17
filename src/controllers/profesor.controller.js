const Profesor = require("../models/profesor");

const ProfesorController = {};

ProfesorController.getAllProfesores = async (req, res, next) => {
  try {
    const Profesores = await Profesor.find();
    res.json(Profesores);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Profesors" });
  }
};

ProfesorController.getProfesorById = async (req, res, next) => {
  try {
    const profesor = await Profesor.findById(req.params.id);
    if (!profesor) {
      return res.status(404).json({ error: "Profesor no encontrado" });
    }
    res.json(profesor);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Profesor" });
  }
};

ProfesorController.createProfesor = async (req, res, next) => {
  try {
    const { dni,
            nombres,
            app,
            apm,
            email,
            pass,
            cursos} = req.body;
    const nuevoProfesor = new Profesor({
        dni,
        nombres,
        app,
        apm,
        email,
        pass,
        cursos //cursoSchema
    });
    await nuevoProfesor.save();
    res.status(201).json({ mensaje: "Profesor creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Profesor" });
  }

};

ProfesorController.editProfesor = async (req, res, next) => {
  const { id } = req.params;
  await Profesor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Profesor actualizado" });
};

ProfesorController.deleteProfesor = async (req, res, next) => {
  await Profesor.findByIdAndRemove(req.params.id);
  res.json({ status: "Profesor eliminado" });
};

module.exports = ProfesorController;