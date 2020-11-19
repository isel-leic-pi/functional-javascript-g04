function getShortMessages(messages){

    let map = messages.map(x => x.message)
    result = map.filter(aux => aux.length < 50)
  
    return result
  }
  
  module.exports = getShortMessages