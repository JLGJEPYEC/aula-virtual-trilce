const Estudiante = require("../models/estudiante");

const estudianteController = {};

estudianteController.getAllestudiantes = async (req, res, next) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los estudiantes" });
  }
};

estudianteController.getestudianteById = async (req, res, next) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id);
    if (!estudiante) {
      return res.status(404).json({ error: "estudiante no encontrado" });
    }
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el estudiante" });
  }
};

estudianteController.createestudiante = async (req, res, next) => {
  try {
    const { dni,nombres,app,apm,email,
            pass,grado,seccion,local,examenes, //examenSchema
            tareas} = req.body;
    const nuevoestudiante = new Estudiante({
        dni,
        nombres,
        app,
        apm,
        email,
        pass,
        grado,
        seccion,
        local,
        examenes, //examenSchema
        tareas, //tareaSchema
    });
    await nuevoestudiante.save();
    res.status(201).json({ mensaje: "estudiante creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el estudiante" });
  }

};

estudianteController.editestudiante = async (req, res, next) => {
  const { id } = req.params;
  await Estudiante.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "estudiante actualizado" });
};

estudianteController.deleteestudiante = async (req, res, next) => {
  await Estudiante.findByIdAndRemove(req.params.id);
  res.json({ status: "estudiante eliminado" });
};

module.exports = estudianteController;