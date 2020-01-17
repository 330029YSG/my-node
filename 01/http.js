/**
 * Created by will on 2020/1/17.
 */
/*
* node.js在实现应用的同时还实现整个HTTP服务器
* */

//1、引入http模块

var http = require('http');
//
//
// //2.用http模块创建服务
// /*
// req 获取url信息(request)
// res 浏览器返回响应信息（response)
// * */
//
// //引入http后可使用createServer
http.createServer(function (req,res) {
//
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//
    res.write("你好呀! nodejs");

    res.end(); /*结束响应*/
//
//     //监听8001端口
}).listen(8001);
