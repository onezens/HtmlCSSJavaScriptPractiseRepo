/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net');
const socketPort = 2089;

const server = net.createServer(function(socket){
    //当有客户端连接时触发
   console.log(socket);
   socket.on('data', function(chunk){
       console.log(chunk.toString());
       socket.write('Server : Hello!');
   });
});

server.listen(socketPort, function(error){
    if(error){
        console.log(error);
    }else {
        console.log('create socket server success! port: ' + socketPort);
    }
});
