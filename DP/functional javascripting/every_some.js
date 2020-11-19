function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        /*Check if every submittedUsers are the same as some goodUsers*/
        let goodUsersIDs = goodUsers.map(user => user.id)
        let submittedUsersIDs = submittedUsers.map(user => user.id)
  
        return submittedUsersIDs.every(id => id == goodUsersIDs.some(goodid => goodid == id))
    };
  }
  
  module.exports = checkUsersValid