'use strict'

//console.log(process.argv)
let sum = 0

let i = 2
while(i < process.argv.length)
    sum += +process.argv[i++]

console.log(sum)
