const { SuccessModel, ErrorModel } = require('../model/resModel.js')
const { loginCheck } = require('../controller/user.js')

const handleUserRouter = (req, res) => {
    const method = req.method

    // 登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const res = loginCheck(username, password)

        if (res) {
            return new SuccessModel()
        } else {
            return new ErrorModel('登录失败！')
        }
    }


}

module.exports = handleUserRouter