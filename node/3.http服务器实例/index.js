/**
 * Created by wangzhen on 16/11/2.
 */

const http = require('http');
var count = 0;
const server = http.createServer(function(req, res){
    //只要有用户请求就会调用此回调
    count ++;
    res.write(`你是第${count}个访问者!`);
    res.end();
});

server.listen(8080, function(error){
   if(error){
       console.log(error);
       console.log('server cretea failed!');
   }else{
       console.log('server create success! port 8080');
   }
});