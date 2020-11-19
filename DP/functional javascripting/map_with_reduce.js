const apply_with_bind = require("./apply_with_bind");

module.exports = function arrayMap(arr, fn) {
    return function() {
        const reducer = (accumulator, currentValue) => accumulator + fn.apply(currentValue);
    }
}