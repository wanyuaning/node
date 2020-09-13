// 原理(listen/use/get/post) (req, res, next) => {}
const http = require('http')
const slice = Array.prototype.slice

class LikeExpross {
    constructor() {
        this.routes = {
            all: [],
            get: [],
            post: []
        }
    }
    register(path) {
        const info = {}
        if (typeof path === 'string') {

        } else {

        }
    }
    use() {

    }
    get() {

    }
    post() {

    }
    listen() {

    }
}
// 工厂函数
module.exports = () => {
    return new LikeExpross()
}