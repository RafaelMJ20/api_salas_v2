const mongoose = require("mongoose");

const SalaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  usuarios: [{ type: String }], // Lista de usuarios en la sala
  creadaEn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sala", SalaSchema);
