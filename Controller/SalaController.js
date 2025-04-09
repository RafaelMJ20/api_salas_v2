const SalasService = require("../Service/SalasService");

const crearSala = async (req, res) => {
  try {
    const { nombre } = req.body;
    const sala = await SalasService.crearSala(nombre);
    res.status(201).json(sala);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerSalas = async (req, res) => {
  try {
    const salas = await SalasService.obtenerSalas();
    res.status(200).json(salas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarSala = async (req, res) => {
  try {
    await SalasService.eliminarSala(req.params.id);
    res.status(200).json({ mensaje: "Sala eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const unirseASala = async (req, res) => {
  try {
    const { usuario } = req.body;
    const sala = await SalasService.unirseASala(req.params.id, usuario);
    res.status(200).json(sala);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearSala,
  obtenerSalas,
  eliminarSala,
  unirseASala
};
