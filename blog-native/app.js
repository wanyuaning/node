const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve('{}')
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve('{}')
            return
        }
        let postData = ''
        req.on('data', (chunk) => {
            postData += chunk
        })
        req.on('end', () => {
            if (!postData) {
                resolve('{}')
                return
            }
            resolve(postData)
        })
    })
}

module.exports = (req, res) => {
    // 设置响应的数据格式
    res.setHeader('Content-Type', 'application/json')

    const url = req.url
    req.path = url.split('?')[0]
    req.query = querystring.parse(url.split('?')[1])
    // 处理 POST DATA
    getPostData(req).then((data) => {
        req.body = JSON.parse(data)

        // 处理blog路由
        const blogData = handleBlogRouter(req, res)
        if (blogData) {
            res.end(JSON.stringify(blogData))
            return
        }

        // 处理user路由
        const userData = handleUserRouter(req, res)
        if (userData) {
            res.end(JSON.stringify(userData))
            return
        }

        // 未命中路由
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404 Not Found\n')
        res.end()
    })

}