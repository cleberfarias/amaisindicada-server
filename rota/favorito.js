const { Route } = require("react-router-dom")

const{ getFavoritos, postFavorito, deleteFavorito} = require("../Controladores/favorito")

const router =Route()

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router