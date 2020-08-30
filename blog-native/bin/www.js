const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer((req, res) => {
    serverHandle(req, res)
})

server.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})