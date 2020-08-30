const loginCheck = (username, password) => {
    if (username === 'ewan' && password === '123456') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}