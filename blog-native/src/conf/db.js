const env = process.env.NODE_ENV

// 配置
let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456789',
        port: '3306',
        database: 'node-blog'
    }
}
if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456789',
        port: '3306',
        database: 'node-blog'
    }
}

module.exports = {
    MYSQL_CONF
}