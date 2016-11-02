/**
 * Created by wangzhen on 16/10/29.
 */
var frames = [];

frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;

var index = 0;
var fbps = 1;

//清屏,推到下一屏幕
var clearWin = () => {

    //var height = process.stdout.getWindowSize()[1] -10;
    //for(var i=0;i<height; i++){
    //    console.log('\n');
    //}
    ////process.stdout.write(height);
    ////console.log(height);
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

};

setInterval(() => {
    //console.log(frames[index % 4]);
    clearWin();
    //可以打印模板字符串 用tab健上的` `${}`格式
    process.stdout.write(`${frames[index % 4]}`);
    index++;
},100);

