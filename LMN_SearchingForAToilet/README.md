#LMN_SearchingForAToilet

1、Node环境搭建：http://blog.csdn.net/yang_chengfeng/article/details/73196720

2、Express: http://www.expressjs.com.cn
（1）下载Express:`sudo npm install -g express-generator`
 (2)创建项目
（3）在项目目录下搭建自己名为service的服务环境(后台)：`express -e service` ，这里的名字根据开发者自己命名进行修改即可
（4）启动`npm start`，默认端口为3000(可根据下面命令行进行验证：`cd bin` -> `cat www` )
 (5)打开`localhost:3000`的网页，查看效果

3、用WebStorm打开service中的app.js和views下的index.ejs，尝试修改index.ejs:

```
<!DOCTYPE html>
<html>
<head>
<title><%= title %></title>
<link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
<h1><%= title %></h1>
<p>Welcome to <%= title %></p>
</body>
</html>

```
改为：

```
<!DOCTYPE html>
<html>
<head>
<title><%= title %></title>
<link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
<h1><%= title %></h1>
<p>欢迎来到新世界<%= title %></p>
</body>
</html>

```

关闭端口，再次进行：`npm start`

4、修改routes中的index.js:

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express' });
return res.send({
status: 1,
info: '厕所服务',
});
});

module.exports = router;


```
5、为了不用每次都重启，可以设置一个全局监听改变

```
sudo npm install -g supervisor
```
6、在service目录下：

```
supervisor bin/www
```
每次执行这个命令行即可

7、服务接口设计
（1）服务架构
（2）数据库
（3）orm模型
（4）安全认证
（5）用户认证

8、高德提供数据接口
（1）找卫生间
（2）阅读
（3）天气
（4）设置

9、需要设计的接口
（1）笑料数据列表接口：/data/read?type=laugh
（2）互联网资讯接口：/data/read?type=it
（3）管理数据列表接口：/data/read?type=manager
（4）散文数据列表接口：/data/read?type=sanwen
（5）阅读模块配置接口：/read?type=config

- 采用：Node文件流，获取上面的json文件
- node.js的fs模块

10、后台系统
（1）数据存储：七牛云、微信公众号

11、
（1） 下载express-session插件：npm install express-session --save
（2）在**app.js**中添加 `var session = require('express-session');`和认证加密：

```
app.use(session({
  secret: '#sddjswjdhww22ygfw2233@@@%#$!@%Q!%*12',
  resave: false,
  saveUninitialized: true
}));
```
12、登陆界面生成原理：
（1）app.js:导入routes
（2）由于` app.use('/', routes);`
（3）routes文件下的index.js:

```
router.get('/', function(req, res, next) {
    if(!req.session.user){
        return res.render('login', {});
    }
    res.render('index', {});
});
```
可知：/ 下到达login


13、react-native创建：https://facebook.github.io/react-native/docs/getting-started.html#content

14、SwitchHosts软件
