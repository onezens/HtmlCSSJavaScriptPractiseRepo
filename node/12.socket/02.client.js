/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net')
const socketPort = 2089;

//端口错误居然捕获不到异常
try  {
    const socket = net.connect({port : socketPort}, function(){
        // socket连接成功的回调
        connectSuccess();
    });
}catch (error){
        console.log('connect to socket failed!');;
}

function connectSuccess() {

    console.log('connect to socket success!');

    process.stdout.write('Client : ');
    //监听控制台输入
    process.stdin.on('data', function(trunk){
        socket.write(trunk.toString().trim());

    });

    //服务器socket回复消息
    socket.on('data', function(trunk){
        console.log( trunk.toString());
        process.stdout.write('Client : ');
    });
}

