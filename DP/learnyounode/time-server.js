'use strict'

const net = require('net')
const port = process.argv[2]
const format = 'YYYY-MM-DD hh:mm'

const server = net.createServer(function (socket) {
    
    const date = new Date()
    const formatedDate = date.getFullYear() 
                    + '-' + (date.getMonth() + 1)
                    + '-' + date.getDate() 
                    + ' ' + (date.getHours() < 10 ? "0" : "")
                    + date.getHours() 
                    + ':' + (date.getMinutes() < 10 ? "0" : "")
                    + date.getMinutes()
    //socket.write(formatedDate + '\n')
    socket.end(formatedDate + '\n')
})
server.listen(port)