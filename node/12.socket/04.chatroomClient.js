/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net');

const serverPort = 2098;
var socket = null;
var msg = {
    name : '',
    protocal : 'broadcast',
    content : ''
};

process.stdout.write('you name: ');
process.stdin.on('data', function(data){
    if(!socket) {
        msg.name = data.toString().trim();
        createSocket()
    };
});

function createSocket() {
     socket = net.createConnection({port: serverPort}, function(){
        createSocketSuccess();
    });
}

function createSocketSuccess() {
    console.log('create Socket Success');

    socket.on('data', function(data){
        var receiveMsg = JSON.parse(data.toString());
        //console.log(receiveMsg);
        console.log(receiveMsg.name + ' : ' + receiveMsg.content);
    });
    process.stdin.on('data',function(data){
        msg.content = data.toString().trim();
        socket.write(JSON.stringify(msg));
    });
}
