const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
    const method = req.method

    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id
        const resData = getDetail(id)

        if (resData.status === 0) {
            return new SuccessModel(resData.data)
        } else {
            return new ErrorModel(resData.message)
        }

    }

    // 新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const resData = newBlog(req.body)
        return new SuccessModel(resData)
    }

    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const resData = updateBlog(req.body)
        return new SuccessModel(resData)
    }

    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const resData = delBlog(req.body.id)
        return new SuccessModel(resData)
    }
}

module.exports = handleBlogRouter