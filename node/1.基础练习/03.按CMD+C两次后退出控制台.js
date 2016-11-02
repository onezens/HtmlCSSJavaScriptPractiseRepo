/**
 * Created by wangzhen on 16/11/2.
 */

setInterval(() => {
    console.log('time');
},1000);

var isFirst = true;
//在控制台按下ctrl+c 后会触发这个方法;
process.on('SIGINT', () => {
    //console.log('Hello');
    if(isFirst){
        console.log('再次按下ctrl+c退出控制台');
        setTimeout(function(){
            isFirst = true;
        },3000);
    }else {
        process.exit();
    }
    isFirst = false;
});