const fs = require('fs')
const path = require('path');

module.exports = function(pathname, fileExt, callback) {
    fs.readdir(pathname, function (err, list) { 
        if(err) return callback(err)

        let fileExtAux = '.' + fileExt
        const result = list.filter( (pathname) => {
           return path.extname(pathname) === fileExtAux
        })
        callback(null, result)
    })
}
