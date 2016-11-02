/**
 * Created by wangzhen on 16/11/2.
 */

console.time('start');

const  fs = require('fs');
var filePath = './file.data';
fs.stat(filePath,function(error,stat){
   if (error){ //文件不存在报错
       console.log('文件不存在!');
       fs.writeFile(filePath, new Date(), 'utf8', function(err){
            if(err){
                console.log('文件创建失败!');
            }else{
                console.log('文件创建成功!');
            }
       });
   }else{
       //console.log(stat);
       fs.unlink(filePath, function(error){
           if(error){
               console.log('文件删除失败!');
           }else {
               console.log('文件删除成功!');
           }
       });
   }
});

console.timeEnd('start'); //用来代码的计时操作