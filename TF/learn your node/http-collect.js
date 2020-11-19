'use strict'

const http = require('http')
const concat = require('concat-stream')

http.get(process.argv[2], response =>{
    response.setEncoding('utf8')
    response.pipe(concat(function(data){
        console.log(data.length)
        console.log(data)
    }))
    
})

/* ALTERNATIVA

    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })


*/