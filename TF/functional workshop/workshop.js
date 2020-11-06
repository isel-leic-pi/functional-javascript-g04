"use strict";

////////////////////// HELLO WORLD /////////////////////////////////
/* 
function upperCaser(input){
    return input.toUpperCase()
}
module.exports = upperCaser
*/


////////////////////// HIGHER ORDER FUNCTIONS /////////////////////////////////
/*
function repeat(operation,num){
    for(let i=0; i<num; ++i){
        operation()
    }
}
/* ALTERNATIVA RECURSIVIDADE
    if (num <= 0) 
        return operation()
    return repeat(operation, --num)

module.exports = repeat
*/


////////////////////////  BASIC: MAP  ///////////////////////////////////
/*
function doubleAll(numbers) {
    return numbers.map( x => x*2)
}
module.exports = doubleAll
*/


////////////////////////  BASIC: FILTER  ///////////////////////////////////
/*
function getShortMessages(messages){
    let ret =[]
    let i =0
    const filtered = messages.filter(function(messages){
        if(messages.message.length < 50)
            ret[i++] = messages.message
    })
    return ret              
}
module.exports = getShortMessages
*/

/* ALTERNATIVA 
 *  function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/


////////////////////////  BASIC: EVERY SOME  ///////////////////////////////////
/*
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
module.exports = checkUsersValid
*/


////////////////////////  BASIC: REDUCE  ///////////////////////////////////
/*
function countWords(inputWords) {
  return inputWords.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 
    return countMap
  }, {})
}
module.exports = countWords
*/


////////////////////////  BASIC: RECURSION  ///////////////////////////////////
////////////////////////  REVER COM COLEGAS OU ENGº ///////////////////////////////////
/*
function reduce(arr, fn, initial) {
  return (function step(idx, value) {
  	if(idx > arr.length - 1) return value;
  	return step(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial)
}
module.exports = reduce
*/


////////////////////////  BASIC: CALL  ///////////////////////////////////
///////////////////////  REVER COM ENGENHEIRO - DIFERENÇA DE OPÇÕES E ENTRE CALL() E APPLY()  ///////////////////////
/*
function duckCount() {
  let ducks = Array.from(arguments);

  return ducks.filter((duck) => Object.prototype.hasOwnProperty.call(duck, "quack")).length
}
module.exports = duckCount

/* ALTERNATIVA
return Array.prototype.slice.call(arguments).filter(function(obj) {
  return Object.prototype.hasOwnProperty.call(obj, 'quack')
}).length
*/


////////////////////////  Partial Application without Bind  ///////////////////////////////////
///////////////////////  REVER COM ENGENHEIRO - PORQUÊ RETORNAR FUNÇÃO E ESCLARECER APPLY() E UTLIZAÇÃO DE SLICE.CALL  ///////////////
///////////////////////  REVER COM ENGENHEIRO - PRIMEIRO PARAMETRO DE APPLY  ///////////////
/*
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}
module.exports = logger
*/


////////////////////////  Partial Application with Bind  ///////////////////////////////////
/*
module.exports = function(namespace) {
  return console.log.bind(null, namespace)
}
*/


////////////////////////  Implement Map with Reduce  ///////////////////////////////////
/////////////////////// ??????????????????????????   //////////////////////////////////
/*
module.exports = function arrayMap(arr, fn) {
  var result = [];
  arr.reduce(function(prev, curr, idx, arr) {
  	result.push(fn(curr));
  }, null);
  return result;
}
*/

////////////////////////  Function Spies  ///////////////////////////////////
/////////////////////// REVER COM ENGº   //////////////////////////////////
/*
function Spy(target, method) {
  var originalFunction = target[method]

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  }

  // replace method with spy method
  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }

  return result
}
module.exports = Spy
*/

