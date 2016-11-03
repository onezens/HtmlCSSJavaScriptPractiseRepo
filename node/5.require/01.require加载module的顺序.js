/**
 * Created by wangzhen on 16/11/3.
 */

/*
     1. 直接加载一个模块,首先从node根目录的node_modules加载,让后依次到文件根目录的node_modules文件夹下查找
     2. 加载一个指定路径的模块,并且路径的根是一个文件夹: 首先找有没有package.json文件,有根据文件main指定的路径
        下去加载; 没有的话加载index.js -> index.json -> index.node.
     3. 通过require加载一个json来加载系统的配置信息
 */
const test = require('../module');
//const test = require('../module/index');
console.log(test);
