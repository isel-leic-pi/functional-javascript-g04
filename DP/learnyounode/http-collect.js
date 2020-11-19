'use strict'
const bl = require('bl')
const http = require('http');

const url = process.argv[2]

http.get(url, function (response) { 
    response.setEncoding('utf8')

    response.pipe(bl(function (err, data) { 
        if (err) {
            return err
        }
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
