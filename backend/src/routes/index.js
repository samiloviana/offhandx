import fs from "node:fs/promises"
export default async function rotas(req, res) {

    if(req.url === "/moedas") {
    const dados = await fs.readFile("../src/database/cambio.json")
    res.statusCode = 200
    res.setHeader("Content-type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end(dados)
    return
    }
    
    res.statusCode = 404
    res.setHeader("Content-type", "application/json")
    res.end("404: Página não encontrada")
}