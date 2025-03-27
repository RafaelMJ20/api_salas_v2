const express = require("express");
const router = express.Router();
const SalaController = require("../Controller/SalaController");

router.post("/salas", SalaController.crearSala);
router.get("/salas", SalaController.obtenerSalas);
router.delete("/:id", SalaController.eliminarSala);
router.put("/:id/unirse", SalaController.unirseASala);

module.exports = router;
