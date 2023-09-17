const Examen = require("../models/examen");

const ExamenController = {};

ExamenController.getAllExamenes = async (req, res, next) => {
  try {
    const Examenes = await Examen.find();
    res.json(Examenes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Examens" });
  }
};

ExamenController.getExamenById = async (req, res, next) => {
  try {
    const examen = await Examen.findById(req.params.id);
    if (!examen) {
      return res.status(404).json({ error: "Examen no encontrado" });
    }
    res.json(examen);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Examen" });
  }
};

ExamenController.createExamen = async (req, res, next) => {
  try {
    const { curso_id,
            profesor_dni,
            fecha,
            preguntas} = req.body;
    const nuevoExamen = new Examen({
          curso_id,
          profesor_dni,
          fecha,
          preguntas,
    });
    await nuevoExamen.save();
    res.status(201).json({ mensaje: "Examen creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Examen" });
  }

};

ExamenController.editExamen = async (req, res, next) => {
  const { id } = req.params;
  await Examen.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: "Examen actualizado" });
};

ExamenController.deleteExamen = async (req, res, next) => {
  await Examen.findByIdAndRemove(req.params.id);
  res.json({ status: "Examen eliminado" });
};

module.exports = ExamenController;