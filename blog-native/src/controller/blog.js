const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '博客标题',
            content: '',
            createtime: 1546610491112,
            author: 'ewan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1546610524373,
            author: 'zhangsan'
        }
    ]
}
const getDetail = (id) => {
    if (!id) { return { status: -1, message: '缺失ID' } }
    return {
        status: 0,
        data: {
            id: 1,
            title: '博客标题',
            content: '',
            createtime: 1546610491112,
            author: 'ewan'
        }
    }

}
const newBlog = (blogData = {}) => {
    console.log('新增博客数据', blogData)
    return {
        id: 3
    }
}
const updateBlog = (updateData = {}) => {
    console.log('新增博客数据', updateData)
    return {
        id: 2
    }
}
const delBlog = (id = {}) => {
    return id + '删除成功！'
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}