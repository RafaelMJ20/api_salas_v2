const Sala = require("../Models/salasModel");

const crearSala = async (nombre) => {
  const nuevaSala = new Sala({ nombre });
  return await nuevaSala.save();
};

const obtenerSalas = async () => {
  return await Sala.find();
};

const eliminarSala = async (id) => {
  return await Sala.findByIdAndDelete(id);
};

const unirseASala = async (id, usuario) => {
  return await Sala.findByIdAndUpdate(id, { $push: { usuarios: usuario } }, { new: true });
};

module.exports = { crearSala, obtenerSalas, eliminarSala, unirseASala };
