// index.js (Microservicio de Salas sin WebSocket)
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const SalaRoutes = require("./routes/SalaRoutes");

const PORT = 3001;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Rutas de las salas
app.use("/", SalaRoutes);

app.listen(PORT, () => {
  console.log(`🏠 Microservicio de Salas corriendo en http://localhost:${PORT}`);
});
