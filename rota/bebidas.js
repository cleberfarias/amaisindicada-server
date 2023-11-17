const { Router } = require("express")

const {getBedidas, getBedida, postBebida, patchBebida, deleteBedida} = require("../Controladores/bebidas")

const router = Router()

router.get('/', getBedidas)

router.get('/:id', getBedida) 

router.post('/', postBebida)


router.patch('/:id', patchBebida)

router.delete('/:id',deleteBedida)

module.exports = router