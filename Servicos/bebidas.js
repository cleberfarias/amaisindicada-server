const fs = require("fs")

function getTodasBibidas(){
   return JSON.parse(fs.readFileSync("bebidas.json"))
}
function getBibidasPorId(id){
    const bebidas = JSON.parse(fs.readFileSync("bebidas.json"))
    const bebidaFiltrado = bebidas.filter(bebida => bebida.id === id[0])
    return bebidaFiltrado
 }
 function insereBebida(bebidaNova) {
    const bebidas = JSON.parse(fs.readFileSync("bebidas.json"))

    const novaListaDeBebidas = [ ...bebidas, bebidaNova]

    fs.writeFileSync("bebidas.json", JSON.stringify(novaListaDeBebidas))
}
function modificaBebida(modificacoes, id){
    let bebidasAtuais = JSON.parse(fs.readFileSync("bebidas.json"))
    const indiceModificado = bebidasAtuais.findIndex(bebida => bebida.id === id)

    const conteudoMudado = { ...bebidasAtuais[indiceModificado], ...modificacoes }

    bebidasAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("bebidas.json", JSON.stringify(bebidasAtuais))
}
function deletarBebidaPorId (id){
    const bebidas  = JSON.parse(fs.readFileSync("bebidas.json"))

    const bebidasFiltradas = bebidas.filter(bebida => bebida.id !== id)

    fs.writeFileSync("bebidas.json", JSON.stringify(bebidasFiltradas))
}


module.exports = {
    getTodasBibidas,
    getBibidasPorId,
    insereBebida,
    modificaBebida,
    deletarBebidaPorId
}