/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net');

var clients = [];
const serverPort = 2098;
//创建socket服务
const serverSocket = net.createServer(function(socket){

    clients.push(socket);
    //console.log(socket.remoteAddress);
    socket.on('data', function(data){
        receiveData(socket, data);
    });
});
//绑定端口,并且处于监听状态
serverSocket.listen(serverPort, function(error){
    if (error){
        console.log(error);
    }else {
        createSocketSuccess();
    }
});

//收到socket接受的消息的处理
function receiveData(socket, data){
    console.log(socket);
}

//socket服务启动成功后的操作
function createSocketSuccess() {
    console.log('create server socket success! port : ' + serverPort);
}
