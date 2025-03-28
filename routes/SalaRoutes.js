const express = require("express");
const router = express.Router();
const SalaController = require("../Controller/SalaController");

router.post("/salas", SalaController.crearSala);
router.get("/salas", SalaController.obtenerSalas);
router.delete("/:id", SalaController.eliminarSala);
router.put("/:id/unirse", SalaController.unirseASala);
router.post('/:id/mensajes', SalaController.agregarMensaje);
router.get('/:id/mensajes', SalaController.obtenerMensajes);

module.exports = router;
