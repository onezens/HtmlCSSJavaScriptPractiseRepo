/**
 * Created by wangzhen on 16/11/5.
 */

const fs = require('fs');
const path = require('path');

// JSON.stringify 序列化 将string转换为object
// JSON.parse 反序列化  将object转换为string


function writeFile() {
    //默认覆盖写入
    fs.writeFile(path.join(__dirname, './temp.txt'), JSON.stringify({name: 'write file test!'}), function(err, data){
        if (err){
            throw err;
        }else{
            console.log('write file success! ');
        }
    });
}

function  streamWrite() {
    var streamWrite = fs.createWriteStream(path.join(__dirname, './temp1.txt'));
    var index = 1;
    setInterval(function(){
        streamWrite.write(index.toString(), function(){
            console.log(index);
            index++;
        });
    }, 100);
}

function  appWriteFile() {
    fs.appendFile(path.join(__dirname, './temp.txt'), JSON.stringify({name1 : 'append write file!'}), function(error){
        if (error){
            console.log(error);
        }else{
            console.log('append write file success!');
        }
    });
}
