const fs = require('fs')
const path = require('path')

// 生成Write Steam
function createWriteStream(filename) {
    const fullFileName = path.resolve(__dirname, '../', '../', 'logs')
    const writeStream = fs.createWriteStream(fullFileName, {
        flags: 'a'
    })
    return writeStream
}

const accessWriteStream = createWriteStream('access.log')

// 写访问日志
function access(log) {
    accessWriteStream.write(log + '\n')
}

module.exports = {
    access
}