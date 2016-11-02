/**
 * Created by wangzhen on 16/11/2.
 */

/*模块里的函数默认是私有的, 外部访问需要抛出入口*/

var myTest = 'calculate test';

console.log('calculate.js'); //调用之后会执行模块里的方法

function  test() {
    console.log('test');
}

//test();

function div(num1 , num2){
    return parseFloat(num1) / parseFloat(num2);
}

function mul(num1, num2){
    return parseFloat(num1) * parseFloat(num2);
}

function  add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}

function  sub(num1, num2){
    return parseFloat(num1) - parseFloat(num2);
}

module.exports = {div, mul, add, sub};

if(module.parent){
    console.log('calculate 被调用了!!!');
}else {
    console.log('calculate 是自己运行的!!!');
}