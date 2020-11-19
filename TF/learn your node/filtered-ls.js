'use strict'

const fs = require('fs')
const path = require('path')

function filteredDir(dirPath, filter){
    fs.readdir(dirPath, function(err, list){
        if(err) return console.log('ERRO!')         // ??? DIFERENÇA console.error(err)
        list.forEach(item =>{                       // ??? DIFERENÇA keyword 'function'
            if(path.extname(item) == '.'+filter)    // ??? PROBLEMAS em usar '==' ou '==='
                console.log(item)
        })
    })
}
    
filteredDir(process.argv[2], process.argv[3])

/* ALTERNATIVA

'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})

*/