/**
 * Created by wangzhen on 16/11/5.
 */

const fs = require('fs');
const path = require('path');

//重命名
function renameFile(){
    fs.rename(path.join(__dirname, './temp.txt'), path.join(__dirname, './temp1.txt'),function(err){
        if(err){
            throw err;
        }else{
            console.log('rename file success.');
        }
    });
}

function moveFile() {
    //移动
    fs.rename(path.join(__dirname, './temp1.txt'), path.join(__dirname, './temp/temp1.txt'), function(err){
        if (err){
            throw err;
        }else {
            console.log('move file success.');
        }
    });
}

moveFile();