const mongoose = require("mongoose");
const { Schema } = mongoose;


const preguntaSchema = new Schema({
    pregunta: { type: String, required: true },
    alternativa_seleccionada: { type: String, required: true },
  });
  
  const examenSchema = new Schema({
    fecha: { type: String, required: true },
    curso_id: { type: Number, required: true },
    nombre_prueba: { type: String, required: true },
    preguntas: [], //preguntaSchema
    calificacion: { type: Number, required: true },
  });
  
  const tareaSchema = new Schema({
    curso_id: { type: Number, required: true },
    archivo: { type: String, required: true },
    nota: { type: Number, required: true },
    observacion: { type: String, required: true },
    fecha: { type: String, required: true },
  });


const estudianteSchema = new Schema(
  {
    dni: { type: Number, required: true },
    nombres: { type: String, required: true },
    app: { type: String, required: true },
    apm: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    grado: { type: String, required: true },
    seccion: { type: String, required: true },
    local: { type: String, required: true },
    examenes: [], //examenSchema
    tareas: [], //tareaSchema
  },
  { versionKey: false, timestamps: false }
);

module.exports = mongoose.model("estudiantes", estudianteSchema);