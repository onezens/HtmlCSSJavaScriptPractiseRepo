/**
 * Created by wangzhen on 16/11/5.
 */

const path = require('path');
const fs = require('fs');
var dirPath = path.join(__dirname, '../');

function readDirs(readPath) {
    var depth = 0;
    read(readPath, depth);
    function read(readDirPath, currentDepth){
        var files = fs.readdirSync(readDirPath);
        var dirArr = [];
        var fileArr = [];
        files.forEach(function(file){
            var fileDir = path.join(readDirPath, file);
            try {
                var stat = fs.statSync(fileDir);
            }catch (error){
                console.log(error);
            }
            if(stat.isDirectory()){
                dirArr.push(file);
                //console.log(file);
            }else {
                fileArr.push(file);
            }
        });
        var dirIndex = new Array(currentDepth+1).join('│ ');
        dirArr.forEach(function(dir){

            if(fileArr.length == 0 && dir == dirArr[dirArr.length-1]){
                console.log(dirIndex + '└─'+dir);
            }else {
                console.log(dirIndex + '├─'+dir);
            }
            read(path.join(readDirPath, dir), currentDepth+1);

        });
        fileArr.forEach(function(file){
            if(file == fileArr[fileArr.length-1]){
                console.log(dirIndex + '└─'+file);
            }else {
                console.log(dirIndex + '├─'+file);
            }
        });
    }
}

readDirs(dirPath);