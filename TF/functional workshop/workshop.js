"use strict";

/*
function upperCaser(input){
    return input.toUpperCase()
}
module.exports = upperCaser
*/
/*

///////////////////////////////////////////////////////


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

///////////////////////////////////////////////////////////


/*
function doubleAll(numbers) {
    return numbers.map( x => x*2)
}
module.exports = doubleAll
*/


//////////////////////////////////////////////
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

/*** ALTERNATIVA 
 *  function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/
///////////////////////////////////////////////////////


///////////// REVER COM COLEGAS ////////////////////
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


/*
function countWords(inputWords) {
  return inputWords.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 
    return countMap
  }, {})
}
module.exports = countWords
*/


/*
function reduce(arr, fn, initial) {

  return (function step(idx, value) {
  	if(idx > arr.length - 1) return value;
  	return step(idx + 1, fn(value, arr[idx], idx, arr))
  })(0, initial)
}
module.exports = reduce
*/


function duckCount() {
  
  let ducks = Array.from(arguments);
  console.log(ducks)  

  return ducks.filter((duck) => Object.prototype.hasOwnProperty.call(duck, "quack")).length
}
module.exports = duckCount

////////// ALTERNATIVA ///////////////
/*
return Array.prototype.slice.call(arguments).filter(function(obj) {
  return Object.prototype.hasOwnProperty.call(obj, 'quack')
}).length
*/