'use strict'
const http = require('http');
const url = require('url');

const port = process.argv[2]

const server = http.createServer(function callback (request, response) { 

    var parsedUrl = url.parse(request.url, true);
    var date = new Date(parsedUrl.query.iso);

    if (parsedUrl.pathname == '/api/parsetime') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}))
    } else if (parsedUrl.pathname === '/api/unixtime') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        return response.end(JSON.stringify({unixtime: date.getTime()}))
    } else {
        res.writeHead(404)
        res.end()
    }
 })
 server.listen(port)