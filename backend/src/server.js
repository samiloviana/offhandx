import http from "node:http"
import rotas from "./routes/index.js"

const port = 3000
const server = http.createServer((req, res) => {
    rotas(req, res)
})

server.listen(port, () => {
    console.log(`Servidor Online na porta ${port}`)
    
})