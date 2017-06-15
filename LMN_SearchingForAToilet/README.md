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


