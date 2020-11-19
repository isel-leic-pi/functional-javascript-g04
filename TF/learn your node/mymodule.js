/* eslint-disable no-unused-vars */
'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function(dirPath, filter, cb) {  
    fs.readdir(dirPath, function(err, list){
        if(err) return cb(err)   
        
        let lista = []
        list.forEach(item =>{                       
            if(path.extname(item) == '.'+filter)    
                lista.push(item)
        })
        cb(null,lista)                           // ??? return aqui ???
    })

} 


/* ALTERNATIVA

    'use strict'
    const fs = require('fs')
    const path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

*/