/**
 * Created by wangzhen on 16/11/9.
 */

const fs = require('fs');
const path = require('path');

function copyFile(targetPath, destPath){
    if(!path.isAbsolute(targetPath) || !path.isAbsolute(destPath)){
        throw new Error('copy file path error!');
    }
    var readStream = fs.createReadStream(targetPath);
    var writeStream = fs.createWriteStream(destPath);
    writeStream.on('pipe', function(src){
        console.log('something is pipe stream');
        console.log(src);
    });
    readStream.pipe(writeStream);
    console.log('pipe copy file success!');

}
var argvs = process.argv.slice(2);
copyFile(argvs[0], argvs[1]);
