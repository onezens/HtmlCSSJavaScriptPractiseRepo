/**
 * Created by wangzhen on 16/11/4.
 */

const fs = require('fs');
const path = require('path');

//异步读取文件
console.time('sync');
fs.readFile('../../README.md', 'utf8',function(error, data){
   if(error){
       throw error;
   }else{
       console.log(data);
   }
    console.timeEnd('sync');
});


//同步读取文件
console.time('async');
try {
    var data = fs.readFileSync('../../LICENSE','utf8');
    console.log(data);
}catch (error){
    throw error;
}
console.timeEnd('async');
