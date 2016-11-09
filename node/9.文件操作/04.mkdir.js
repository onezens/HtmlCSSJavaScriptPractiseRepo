/**
 * Created by wangzhen on 16/11/8.
 */

const path = require('path');
const fs = require('fs');

//创建单级目录
function makeDir(dirPath) {
    fs.stat(dirPath,function(error, stat){
        if(error){
            //console.log(error);
            fs.mkdir(dirPath, function(err){
                if(err){
                    console.log(err);
                }else {
                    console.log('make directory success!');
                }
            });
        }else {
            console.log('directory exist!');
        }
    });
}


function makeDirSync(dirPath) {
    fs.stat(dirPath,function(error, stat){
        if(error){
            try {
                fs.mkdirSync(dirPath);
            }catch(error){
                throw  error;
            }
        }
    });
}

//makeDirSync(path.join(__dirname, 'demo/demo'));
//可以创建多个目录
function  makeDirs(dirpath) {
    fs.stat(dirpath, function(err, stat){
        if (err){
            var dirComponent = path.relative(__dirname, dirpath);
            var dirComArr = dirComponent.split('/');
            //console.log(dirComArr);
            var dirName= __dirname;
            dirComArr.forEach(function(dirCom){
                dirName = path.join(dirName, dirCom);
                try {
                    makeDirSync(dirName);
                }catch(error){
                    console.log(error);
                }
            });
            console.log('create directory success!');
        }else {
            console.log('directory exist!');
        }
    });
}

makeDirs('demo/deosda/sdfasdf/asdfa');

