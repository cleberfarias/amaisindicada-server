const { getTodosFavoritos, insereFavorito, deleteFavoritoPorId } = require("../Servicos/favoritos");

function getFavoritos(req, res) {
    try {
        const bebidas = getTodosFavoritos();
        res.send(bebidas);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        insereFavorito(id);
        res.status(201).send("Bebida inserida com sucesso");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deleteFavoritoPorId(id);
            res.send("Favorito deletado com sucesso");
        } else {
            res.status(422).send("ID inválido");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito,
};
