const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deleteFavoritoPorId(id) {
    const bebidas = JSON.parse(fs.readFileSync("favoritos.json"));

    const bebidasFiltradas = bebidas.filter(bebida => bebida.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(bebidasFiltradas));
}

function insereFavorito(id) {
    const bebidas = JSON.parse(fs.readFileSync("bebidas.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const bebidaInserida = bebidas.find(bebida => bebida.id === id);
    const novaListaDeBebidasFavoritas = [...favoritos, bebidaInserida];
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeBebidasFavoritas));
}

module.exports = {
    getTodosFavoritos,
    deleteFavoritoPorId,
    insereFavorito,
};
