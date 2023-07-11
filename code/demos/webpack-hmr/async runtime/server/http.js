const http = require('http');
const fs = require('fs');

// 创建服务器
http.createServer(function (request, response) {
    fs.readFile('./src_app_js.js', function (err, data) {
        response.end(data);
    });
}).listen(3009, function () {
    console.log('OK,访问：localhost:3009');
});
