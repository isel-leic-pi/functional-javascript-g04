'use strict'
const fs = require('fs')
const http = require('http')

const port = process.argv[2]
console.log(port)
const file = process.argv[3]

const server = http.createServer(function callback (request, response) { 
    const buf = fs.createReadStream(file)
    buf.pipe(response)
 })
 server.listen(port)