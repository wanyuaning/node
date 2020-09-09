const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    return exec(sql)
}
const getDetail = (id) => {
    if (!id) { return { status: -1, message: '缺失ID' } }
    const sql = `select * from blogs where id = '${id}'`
    return exec(sql)

}
const newBlog = (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const createtime = new Date().getTime()
    const author = blogData.author
    const sql = `insert into blogs (title, content, createtime, author) values('${title}', '${content}', '${createtime}', '${author}')`
    return exec(sql)
}
const updateBlog = (updateData = {}) => {
    const id = updateData.id
    const title = updateData.title
    const content = updateData.content
    const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
    return exec(sql)
}
const delBlog = (id, author) => {
    const sql = `delete from blogs where id='${id}' and author=''${author}`
    return exec(sql)
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}