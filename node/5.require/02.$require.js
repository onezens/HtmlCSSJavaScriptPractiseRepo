/**
 * Created by wangzhen on 16/11/3.
 */

//启用node.js代码的严格模式,可以使用let const
//let 局部变量
//系统的module有缓存机制,也就是再次调用require的时候,里面的代码只执行一次,再次调用并且要重新加载时需要清空缓存
'use strict'

function $require(obj){

    const fs = require('fs');
    const path = require('path');
    let filePath = path.join(__dirname, obj);

    //初始化缓存
    $require.cache = $require.cache || {};

    //有缓存的话加载缓存
    let cache = $require.cache[filePath];
    if(cache) return cache;

    //定义一个module对象
    let module = {
        id : filePath,
        exports : {}
    };
    let exports = module.exports;

    //读取引入的module, 必须是同步, 因为下面的代码要使用
    let code = fs.readFileSync(filePath,'utf8');

    code = `
        (function ($require, module, exports, __dirname, __filename){
            ${code};
         })($require, module, exports, __dirname, __filename);
    `;
    eval(code);

    //缓存赋值
    $require.cache[filePath] = module;

    return module;

}

//$require('../module/index.js');
//console.log($require('../module/index.js'));

//清除系统require的缓存
require('../module/index.js');
clearCache('../module/index.js');
console.log(require('../module/index.js'));

//清除系统require的缓存
function clearCache(obj){
    const path = require('path')
    let filepath = path.join(__dirname, obj);
    Object.keys(require.cache).forEach(function(key){
        //console.log(key);
       if (key == filepath){
          delete require.cache[key];
       }
    });
}