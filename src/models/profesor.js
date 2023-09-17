const mongoose = require("mongoose");
const { Schema } = mongoose;



const profesorSchema = new Schema(
  {
    dni: { type: Number, required: true },
    nombres: { type: String, required: true },
    app: { type: String, required: true },
    apm: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    cursos: [] //cursoSchema
  },
  { versionKey: false, timestamps: false }
);

module.exports = mongoose.model("profesores", profesorSchema);