const express = require("express");
const router = express.Router();

const { getFavoritos, postFavorito, deleteFavorito } = require("../Controladores/favorito");

router.get('/', getFavoritos);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

module.exports = router;