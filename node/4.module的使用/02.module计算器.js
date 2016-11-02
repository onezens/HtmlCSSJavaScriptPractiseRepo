/**
 * Created by wangzhen on 16/11/2.
 */
const calc = require('../module/calculate.js');
const args = process.argv.slice(2);
console.log(args);
if(args.length < 3) {
    throw new Error('输入参数错误!');
}

var operNum1 = args[0];
var operSign = args[1];
var operNum2 = args[2];
var result = 0.0;

switch (operSign){
    case '+' :
        result = calc.add(operNum1, operNum2);
        break;
    case '-' :
        result = calc.sub(operNum1, operNum2);
        break;
    case 'x' :
        result = calc.mul(operNum1, operNum2);
        break;
    case '/' :
        result = calc.div(operNum1, operNum2);
        break;
    default :
        throw new Error('输入的运算符错误!');
        break;
}
console.log('result = ' + result);

//calc.test(); //访问没有导出的方法报错!
//console.log(myTest);
console.log(calc); //输出的内容为module.export 的方法信息
console.log(module);  //输出自身的module信息

if(module.parent){
    console.log('02.module计算器 被调用了!!!');
}else {
    console.log('02.module计算器 是自己运行的!!!');
}