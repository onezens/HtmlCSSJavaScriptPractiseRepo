
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
        result = parseFloat(operNum1) + parseFloat(operNum2);
        break;
    case '-' :
        result = parseFloat(operNum1) - parseFloat(operNum2);
        break;
    case 'x' :
        result = parseFloat(operNum1) * parseFloat(operNum2);
        break;
    case '/' :
        result = parseFloat(operNum1) / parseFloat(operNum2);
        break;
    default :
        throw new Error('输入的运算符错误!');
        break;
}
console.log('result = ' + result);
