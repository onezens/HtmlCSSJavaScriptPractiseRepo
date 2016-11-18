/**
 * Created by wangzhen on 16/11/18.
 */

const  net = require('net');

var  socket = net.connect({port : 80, host: 'm.baidu.com'}, function(){
    console.log('connet socket success!!');
    socket.on('data', function(data){
        console.log(data.toString());
    });
    socket.write(`GET / HTTP/1.1
Accept: text/html
Host:m.baidu.com

`);
});
