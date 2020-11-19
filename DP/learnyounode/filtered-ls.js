const fs = require('fs')
const path = require('path');

const filepath = process.argv[2]
const fileExt = '.' + process.argv[3]

fs.readdir(filepath, function callback (err, list) { 
    if(err) callback(err)
    let result = list.filter( (pathname) => {
       return path.extname(pathname) === fileExt
    })
    result.forEach(element => console.log(element));
})
