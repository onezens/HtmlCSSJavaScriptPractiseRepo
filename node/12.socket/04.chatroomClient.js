/**
 * Created by wangzhen on 16/11/17.
 */

const net = require('net');

const serverPort = 2098;
const socket = net.createConnection({port: serverPort}, function(){
    console.log('success');
});
