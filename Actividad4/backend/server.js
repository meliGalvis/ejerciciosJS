const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

const app = express();

// conectar DB
conectarDB();

app.use(cors());
app.use(express.json());

// rutas
app.use("/api", require("./routes/usuarios"));
app.use("/api", require("./routes/bovinos"));


// servidor
app.listen(3000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:3000");
});


