import fs from "node:fs/promises"

async function cambio() {

const consulta = await fetch("https://v6.exchangerate-api.com/v6/1015227165fabdcf141f7bf2/latest/USD")
const dados = await consulta.json()
await fs.writeFile("../database/cambio.json", JSON.stringify(dados))

}

cambio()

setInterval(cambio, 3600000)