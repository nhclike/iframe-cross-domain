let http=require('http');
let url=require('url');
let util=require('util');
let fs=require('fs');
let server=http.createServer((req,res)=>{
  var pathname=url.parse(req.url).pathname;
  console.log(pathname+'pathname');
  fs.readFile(pathname.substring(1),function (err,data) {
    if(err){
      res.writeHead(404,{
        'Content-Type':'text/html'
      })
    }
    else{
      res.writeHead(200,{
        'Content-Type':'text/html'
      })
      res.write(data.toString());
    }
    res.end();
  })

});
server.listen(8087,'localhost',()=>{
  console.log('服务器已经运行:http://localhost:8087');
  //console.log(url.parse('http://localhost:8080/index.html?a=1232'));
});
