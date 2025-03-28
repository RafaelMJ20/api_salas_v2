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

const agregarMensaje = async (req, res) => {
  try {
    const { id } = req.params;  // ID de la sala
    const { sender, text } = req.body;  // Datos del mensaje: quien lo envía y el texto

    const mensajes = await SalasService.agregarMensaje(id, sender, text);

    if (!mensajes) {
      return res.status(404).json({ message: "Sala no encontrada" });
    }

    res.status(200).json(mensajes);  // Devolver los mensajes actualizados
  } catch (error) {
    console.error("Error al agregar el mensaje:", error);
    res.status(500).json({ message: "Error al agregar el mensaje" });
  }
};

const obtenerMensajes = async (req, res) => {
  try {
    const roomId = req.params.id;  // Obtener el id de la sala desde los parámetros de la URL

    const mensajes = await SalasService.obtenerMensajes(roomId);

    if (!mensajes) {
      return res.status(404).json({ message: "Sala no encontrada" });
    }

    res.status(200).json(mensajes);  // Devolver los mensajes de la sala
  } catch (error) {
    console.error("Error obteniendo los mensajes:", error);
    res.status(500).json({ message: "Error al obtener los mensajes" });
  }
};

module.exports = { crearSala, obtenerSalas, eliminarSala, unirseASala, agregarMensaje, obtenerMensajes};
