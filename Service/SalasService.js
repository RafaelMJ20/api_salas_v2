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

const agregarMensaje = async (id, sender, text) => {
  try {
    const sala = await Sala.findById(id);  // Buscar la sala por ID

    if (!sala) {
      return null;  // Si la sala no existe, retornar null
    }

    // Crear un nuevo mensaje
    const nuevoMensaje = { sender, text };

    // Agregar el mensaje al arreglo de mensajes de la sala
    sala.mensajes.push(nuevoMensaje);
    
    // Guardar la sala con el nuevo mensaje
    await sala.save();

    return sala.mensajes;  // Devolver los mensajes actualizados
  } catch (error) {
    console.error("Error al agregar el mensaje:", error);
    throw error;
  }
};

const obtenerMensajes = async (id) => {
  try {
    const sala = await Sala.findById(id);  // Buscar la sala por ID

    if (!sala) {
      return null;  // Si la sala no existe, retornar null
    }

    return sala.mensajes;  // Devolver los mensajes de la sala
  } catch (error) {
    console.error("Error al obtener los mensajes:", error);
    throw error;
  }
};


module.exports = { crearSala, obtenerSalas, eliminarSala, unirseASala, agregarMensaje, obtenerMensajes };
