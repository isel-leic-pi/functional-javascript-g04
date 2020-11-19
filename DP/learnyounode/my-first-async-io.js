const fs = require('fs')

const filepath = process.argv[2]

function read() {
    //fs.readFile(filepath, function(err, data) {
    //fs.readFile(filepath, (err, data) => {
    fs.readFile(filepath, function callback(err, data) {
        if (err) return console.error(err)
        console.log(data.toString().split('\n').length-1)
    })
}

read()