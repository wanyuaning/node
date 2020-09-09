const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
    const method = req.method

    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id
        const result = getDetail(id)
        return result.then(detail => {
            return new SuccessModel(detail)
        })
    }

    // 新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel({
                id: data.insertId
            })
        })

    }

    // 更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(req.body)
        return result.then(data => {
            // affectedRows changedRows
            return new SuccessModel(data)
        })
    }

    // 删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const author = 'ewan'
        const result = delBlog(req.body.id, author)
        return result.then(data => {
            // affectedRows changedRows
            return new SuccessModel(data)
        })
    }
}

module.exports = handleBlogRouter