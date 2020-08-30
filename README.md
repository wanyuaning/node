
博客项目
需求分析和技术方案设计
实现API和数据存储，使用mysql数据库
从0实现登录，并使用redis存储登录信息
安全、日志记录和日志分析

中间件机制／原理
常用插件

线上环境
PM2介绍和配置
PM2多进程模型
关于服务端的运维

稳定性：PM2进程守候
内存和CPU优化和扩展：
日志记录：stream写日志，使用redis存session
安全：
集群和服务拆分

mysql  redis .  nginx

目标
开发一个博客系统，具有博客的基本功能
只开发server端，不关心前端

需求
首页、作者主页、博客详情页
登录页
管理中心、新建页、编辑页

技术方案

数据存储：
博客 id  title  content  createtime  author
用户 id  username  password  realname

如何与前端对接，即接口设计
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

原生代码 blog-native/README.md

express重构案例 README.md

koa2重构案例 README.md




