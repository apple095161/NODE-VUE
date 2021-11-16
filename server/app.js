var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var vhost = require('vhost');
const connect = require('connect');
const formidable = require('express-formidable') // 引入
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const server = connect();

var app = express();


// const emailApp = connect();
// emailApp.use(vhost('wewwewewweeew.com', function handle (req, res, next) {
//   // for match of "foo.bar.example.com:8080" against "*.*.example.com":
//   console.dir(req.vhost.host) // => 'foo.bar.example.com:8080'
//   console.dir(req.vhost.hostname) // => 'foo.bar.example.com'
//   console.dir(req.vhost.length) // => 2
//   console.dir(req.vhost[0]) // => 'foo'
//   console.dir(req.vhost[1]) // => 'bar'
// }))

// server.use(vhost('email.local'));

// server.listen(3000);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(formidable()) //formdata處理
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: ['http://localhost:8080'],  //允許跨去存取網址
  methods: ['GET', 'POST'],			//只允許GET和POST請求
  // alloweHeaders: ['Conten-Type']	//只允帶這兩個title的訪問 , 'Authorization'
}))
app.use('/login', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
