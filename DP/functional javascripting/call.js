function duckCount() {
    console.log(arguments)
    let arg_array = Array.prototype.slice.call(arguments);
    let count = 0
  
    for (let i = 0; i < arg_array.length; i++) {
      
      //console.log(arg)
      //Object.prototype.hasOwnProperty.call(arg_array[i], 'quack')
      //Object.getPrototypeOf(arg_array[i])
      //Object.getPrototypeOf(arg_array[i]) === null
      if(Object.prototype.hasOwnProperty.call(arg_array[i], 'quack')) {
        count++;
      }
    }
  
    return count
  }
  
  module.exports = duckCount