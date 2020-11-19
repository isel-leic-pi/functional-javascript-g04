'use strict'
const http = require('http');
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer(function callback (request, response) { 

    if (request.method !== 'POST') {
        return response.end('Error')
      }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(response)
 })
 server.listen(port)