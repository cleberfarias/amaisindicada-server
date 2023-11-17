const fs = require("fs")
const { getTodasBibidas, getBibidasPorId, insereBebida, modificaBebida, deletarBebidaPorId } = require("../Servicos/bebidas")

function getBedidas(req, res) {
    try {
        const bebidas = getTodasBibidas()
        res.send(bebidas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getBedida(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const bebida = getBibidasPorId(id)
            res.send(bebida)
        } else { }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postBebida(req, res) {
    try {
        const bebidaNova = req.body
        if (req.body.nome) {
            insereBebida(bebidaNova)
            res.status(201)
            res.send("Bebida inserida com sucesso")
        }else{
            res.status(422)
            res.send("O Campo Nome é obrigatório")

        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function patchBebida(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaBebida(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function deleteBedida(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletarBebidaPorId(id)
            res.send("Bebida excluida com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getBedidas,
    getBedida,
    postBebida,
    patchBebida,
    deleteBedida

}