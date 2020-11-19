'use strict'
const bl = require('bl')
const http = require('http');

const urls = [ process.argv[2],
                process.argv[3],
                process.argv[4] ]

urls.forEach(url => {
    http.get(url, function (response) { 
        response.setEncoding('utf8')
    
        response.pipe(bl(function (err, data) { 
            if (err) {
                return err
            }
            console.log(data.toString())
        }))
    })
});

