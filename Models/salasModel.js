const mongoose = require("mongoose");

const MensajeSchema = new mongoose.Schema({
  sender: { type: String, required: true },  // Usuario que envió el mensaje
  text: { type: String, required: true },    // Contenido del mensaje
  timestamp: { type: Date, default: Date.now }  // Fecha de envío del mensaje
});

const SalaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },  // Nombre de la sala
  usuarios: [{ type: String }],  // Lista de usuarios en la sala
  mensajes: [MensajeSchema],  // Arreglo de mensajes en la sala
  creadaEn: { type: Date, default: Date.now }  // Fecha de creación de la sala
});

module.exports = mongoose.model("Sala", SalaSchema);
