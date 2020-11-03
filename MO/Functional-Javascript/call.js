'use strict'

function duckCount() {
    const argsArray = arguments.filter((duck) => Object.prototype.hasOwnProperty.call(duck, 'quack'))

    console.log(argsArray)

    return argsArray.length
}

// eslint-disable-next-line no-undef
module.exports = duckCount