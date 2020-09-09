const { exec, escape } = require('../db/mysql')

const login = (username, password) => {
    username = escape(username) // 防SQL注入
    password = escape(password)
    const sql = `select username, realname from users where username=${username} and password=${password};`
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}