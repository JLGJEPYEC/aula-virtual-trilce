const mongoose = require("mongoose");
const { Schema } = mongoose;


const preguntaSchema = new Schema({
    pregunta: { type: String, required: true },
    alt_correcta: { type: String, required: true },
    alts_res: []
  });
  /*
  const examenSchema = new Schema({
    fecha: { type: String, required: true },
    curso_id: { type: Number, required: true },
    nombre_prueba: { type: String, required: true },
    preguntas: [], //preguntaSchema
    calificacion: { type: Number, required: true },
  });
  */
  const tareaSchema = new Schema({
    curso_id: { type: Number, required: true },
    archivo: { type: String, required: true },
    nota: { type: Number, required: true },
    observacion: { type: String, required: true },
    fecha: { type: String, required: true },
  });


const examenSchema = new Schema(
  {
    curso_id: { type: Number, required: true },
    profesor_dni: { type: Number, required: true },
    fecha: { type: String, required: true },
    preguntas: [] //preguntaSchema
  },
  { versionKey: false, timestamps: false }
);

module.exports = mongoose.model("examenes", examenSchema);