/**
 * Created by wangzhen on 16/11/4.
 */

/*
*   当读取文件的时候,指定编码则根据编码去读取,
*   没有指定编码的时候是 Buffer 类型
*   这个读取方式是一次性将文件全部读取到内存当中,适合读取小文件
* */

const fs = require('fs');
const path = require('path');

try {
    var data = fs.readFileSync(path.join(__dirname, '../../README.md'));
    console.log(typeof data);
    console.log(data);
    console.log(data.toString());
    console.log('*****************************');
}catch (error){
    throw error;
}

fs.readFile(path.join(__dirname, '../../LICENSE'),function(error,data){
    if (error){
        throw error;
    }else{
        console.log(typeof data);
        console.log(data);
        console.log(data.toString());
    }
});

fs.readFile(path.join(__dirname, '../../images/fengjing.png'), function(err, data){

    if(err){
        throw err;
    }else  {
        console.log('*************  image  *************');
        console.log(data.toString('base64'));
    }

});




