const express = require('express');
const cors = require("cors");
const morgan = require('morgan');

const app = express();

app.set('port',3000)

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use("/curso",require("./routes/curso.routes"));
app.use("/estudiante",require("./routes/estudiante.routes"));
app.use("/examen",require("./routes/examen.routes"));
app.use("/profesor",require("./routes/profesor.routes"));

module.exports = app;

