function reduce(arr, fn, initial) {
    return (function reduceOne(index, retarray) {
        if (index > arr.length - 1) return retarray
        return reduceOne(++index, fn(retarray, arr[index], index, arr))
      })(0, initial)
  }
  
  module.exports = reduce