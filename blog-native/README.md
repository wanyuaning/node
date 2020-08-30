
nodemon   监测开发文件变化，自动重启node
cross-env  设置环境变量，兼容mac/linux/windows

开发接口
----------------------------------------------------------------------------------
描述             接口              方法    url参数          备注
----------------------------------------------------------------------------------
获取博客列表      /api/blog/list    get    author/keyword  参数为空的话，则不进行查询过滤
获取一篇博客的内容 /api/blog/detail  get    id
新增一篇博客      /api/blog/new     post                    post中有新增的信息
更新一篇博客      /api/blog/update  post   id               postData中有更新的内容
删除一篇博客      /api/blog/del     post   id
登录             /api/user/login   post                    postData中有用户名和密码
----------------------------------------------------------------------------------


MySQL
下载 https://dev.mysql.com/downloads/mysql/
工具 https://dev.mysql.com/downloads/workbench/
安装 记住密码

NODEJS连接MySQL


API连接MySQL

