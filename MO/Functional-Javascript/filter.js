module.exports = function getShortMessages(messages) {
    const arr = messages.map(x => x.message)
    const res = arr.filter(mess => mess.length < 50)

    return res
}
