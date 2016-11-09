/**
 * Created by wangzhen on 16/11/9.
 */

const fs = require('fs');
const path = require('path');

//复制文件,将文件一次性加载到内存当中,大文件会内存爆掉
function copyFile(targetPath ,desPath){
    targetPath = path.isAbsolute(targetPath) ? targetPath : path.join(__dirname, targetPath);
    desPath = path.isAbsolute(desPath) ? desPath : path.join(__dirname, desPath);
    fs.readFile(targetPath, 'utf8', function(err, data){
        if(err){
            throw err;
        }
        fs.writeFile(desPath, data, 'utf8', function(err){
            if(err){
                throw err;
            }
            console.log('copy file success!');
        });
    });
}

var argvs = process.argv.slice(2);

copyFile(argvs[0], argvs[1]);