function countWords(inputWords) {
    return inputWords.reduce((much, fruit) => {
        if (!much[fruit]) {
            much[fruit] = 1
        } else {
            much[fruit] = much[fruit] + 1
        }
        return much;
    }, {} )
    
}


module.exports = countWords