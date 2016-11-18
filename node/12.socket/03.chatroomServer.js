/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net');

var clients = [];
var msg = {
    name : 'server',
    protocal : 'sys',
    content : ''
};

const serverPort = 2098;
//创建socket服务
const serverSocket = net.createServer(function(socket){

    clients.push(socket);
    console.log('User : ' + socket.remoteAddress  + ' is online. At now online count : ' + clients.length);
    //console.log(socket.remoteAddress);
    socket.on('data', function(data){
        receiveData(socket, data);
    }).on('error', function(error){
       console.log(error);
    }).on('close', function(had_error){
        if(had_error){
            console.log('transmit error');
        }else {
            clients.splice(clients.indexOf(socket), 1);
            console.log('User : ' + socket.remoteAddress  + ' is offline. At now online count : ' + clients.length);

        }
    });
});
//绑定端口,并且处于监听状态
serverSocket.listen(serverPort, function(error){
    if (error){
        console.log(error);
    }else {
        createSocketSuccess();
    }
    serverSocket.on('error', function(error){
        console.log('server socket error');
    });
});

//收到socket接受的消息的处理
function receiveData(socket, data){
    //console.log(socket);
    var clientMsg = JSON.parse(data.toString());
    switch (clientMsg.protocal){
        case 'broadcast' :
            brocastMsg(data, socket);
            break;
        default :
            msg.content = 'protocal not support';
            socket.write(JSON.stringify(msg));
            break;
    }
}

function brocastMsg(data, srcSocket){
    clients.forEach(function(client){
        if(client !== srcSocket) client.write(data);
    });
}

//socket服务启动成功后的操作
function createSocketSuccess() {
    console.log('create server socket success! port : ' + serverPort);
}
