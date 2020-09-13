var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 静态服务设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// 打印日志
app.use(logger('dev'));
// 处理POST请求('content-type'='application/json')数据到req.body
app.use(express.json());
// 处理POST请求(x-www-form-urlencoded)数据到req.body
app.use(express.urlencoded({ extended: false }));
// 解析cookie到req.cookie
app.use(cookieParser());

// 依据路径注册根路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 无匹配路由时导向404
app.use(function (req, res, next) {
    next(createError(404));
});

// 服务异常
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
