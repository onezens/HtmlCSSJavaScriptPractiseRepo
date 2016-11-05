/**
 * Created by wangzhen on 16/11/4.
 */

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

var filepath = path.join(__dirname, './geci.lrc');

function readFileWithGBK(){
    fs.readFile(filepath,function(err, data){
        console.log(iconv.decode(data, 'gbk'));
    });
}

function  readLineWithGBK() {
    var streamReader = fs.createReadStream(filepath).pipe(iconv.decodeStream('gbk'));
    var rl = readline.createInterface({input : streamReader});
    rl.on('line', function (line) {
        console.log(line);
    });
}

readLineWithGBK();