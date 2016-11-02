/**
 * Created by wangzhen on 16/11/2.
 */

var fs = require('fs');

console.log('1');
//默认是异步读取
fs.readFile('../01模拟终端运行命令.js', 'utf8', function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
console.log('2');
//同步读取
try {
    var data = fs.readFileSync('./08.js', 'utf8');
}catch (error){
    console.log(error);
}
console.log(data);
console.log('3');