/**
 * Created by wangzhen on 16/11/4.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const iconv = require('iconv-lite');


var filePath = path.join(__dirname, './geci.lrc');
var streamRead = fs.createReadStream(filePath).pipe(iconv.decodeStream('gbk'));
var rl = readline.createInterface({input : streamRead});
var time = new Date().getTime();
rl.on('line', function(line){
   playGeci(line);
});
//playGeci('[01:43.31] 无言独坐放眼尘世外');
function playGeci(line){
    //
    // /b[/b(\d{2})/b:/b(\d{2})/b./b(\d{2})/b]/b\s(.+)
    //var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
    var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
    var matches = regex.exec(line);
    if(matches){
        var minute = parseFloat(matches[1]);
        var second = parseFloat(matches[2]);
        var minSec = parseFloat(matches[3]);
        var text = matches[4];
        var offset = new Date().getTime() - time;
        console.log(offset);
        var timeout = minute*60*1000 + second*1000 + minSec - offset;
        setTimeout(function(){
            console.log(text);
        }, timeout);
    }else{
        console.log(line);
    }
}
