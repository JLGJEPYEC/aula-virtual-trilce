const mongoose = require("mongoose");
const { Schema } = mongoose;




const cursoSchema = new Schema(
  {
    grado: { type: String, required: true },
    seccion: { type: String, required: true },
    local: { type: String, required: true },
    nombre_curso: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);


module.exports = mongoose.model("cursos", cursoSchema);