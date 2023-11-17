const express = require('express')
const rotaBebidas = require("./rota/bebidas")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/bebidas', rotaBebidas)

const port = 8080

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})

