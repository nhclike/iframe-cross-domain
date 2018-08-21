# iframe-cross-domain
use postMessage resolve iframe cross domain 
分别进入father和children使用node 启动server
node server.js
根据提示访问地址加上文件名
比如：访问父页面
http://127.0.0.1:3020/father.html

如果遇到问题
1首先检查是否是端口号占用
2单独访问子页面是否成功
3父页面中指向的子页面地址是否正确
4监听ip地址和端口是否输入正确