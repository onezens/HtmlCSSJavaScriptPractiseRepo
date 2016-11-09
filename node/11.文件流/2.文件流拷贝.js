/**
 * Created by wangzhen on 16/11/9.
 */

const fs = require('fs');
const path = require('path');

//文件流拷贝,加载到内存当中的是一小部分,和磁盘互相交换
function copyFile(targetPath, destPath) {
    if (!path.isAbsolute(targetPath) || !path.isAbsolute(destPath)) {
        throw new Error('input path error!');
    }
    fs.stat(targetPath, function(error, stat){
        if(error){
            throw error;
        }
        if (stat){
            var readStream = fs.createReadStream(targetPath);
            var writeStream = fs.createWriteStream(destPath);
            var total = 0;
            readStream.on('data', function(trunk){
                writeStream.write(trunk, function(error){
                    if (error){
                        throw error;
                    }
                    total += trunk.length;
                    console.log('copy progress: ' + total / stat.size);
                });
            });
        }

    });

}

var argvs = process.argv.slice(2);

copyFile(argvs[0], argvs[1]);
