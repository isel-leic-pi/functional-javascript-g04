const mymodule = require('./mymodule.js')

const filepath = process.argv[2]
const fileExt = process.argv[3]

mymodule(filepath, fileExt, function(err, files) {
    files.forEach(element => console.log(element));
})
