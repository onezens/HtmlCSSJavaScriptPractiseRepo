/**
 * Created by wangzhen on 16/11/5.
 */

const path = require('path');
const fs = require('fs');
var filePath = path.join(__dirname, '../');

fs.readdir(filePath, function(err, files){

    if(err){
        console.log(err);
    }else {
        //console.log(files);
        files.forEach(function(file){
           getFileInfo(file, filePath);
        });
    }

});

function getFileInfo(file, fPath){

    console.log(fs.statSync(path.join(fPath, file)));
}
