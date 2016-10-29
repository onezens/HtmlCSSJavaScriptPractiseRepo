/**
 * Created by wangzhen on 16/10/29.
 */

/* process.argv 默认前两个参数分别为:  node平台的路径、当前运行脚本的路径*/
/* 从索引处开始,取到末尾,js api */
var argvs = process.argv.slice(2); //slice(2); 过滤掉默认的两个参数

switch (argvs[0]){
    case "install" :
       install(argvs[1]);
        break;
    case "init" :
        initApp();
        break;
    case "uninstall" :
        uninstall(argvs[1]);
        break;
    default:
        console.log("undefine command!!!");
        break;
}

function initApp() {

    console.log('init run env success!');

}

function uninstall(name) {
    if(name == undefined){
        console.log("input uninstall app name");
    }else  {
        console.log('uninstall app ' + name +' success.');
    }
}


function install(name) {
    if(name == undefined){
        console.log("input install app name");
    }else  {
        console.log('install app ' + name +' success.');
    }
}