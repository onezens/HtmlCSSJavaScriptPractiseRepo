/**
 * Created by wangzhen on 16/11/3.
 */

const path = require('path');

//多个字符串拼接成为一个路径
var filePath = path.join(__dirname, '../../README.md');
console.log(filePath);

//获取文件的名称, 第二个参数可以不传,传则不会输出扩展名
console.log(path.basename(filePath, ".md"));

//获取不同操作系统的分隔符
console.log(path.delimiter);

//根据分隔符将环境变量转换为数组
console.log(process.env.PATH.split(path.delimiter));

//获取文件的路径
console.log(path.dirname(filePath));

//获取扩展名
console.log(path.extname(filePath));

// 路径解析为一个对象
/*
 { root: '/',
 dir: '/Users/wangzhen/Desktop/Zhen/git/web',
 base: 'README.md',
 ext: '.md',
 name: 'README' }
* */
var pathObj = path.parse(filePath);
console.log(pathObj);

//将路径对象解析为字符串路径
console.log(path.format(pathObj));

//判断一个路径是否为绝对路径
console.log(path.isAbsolute(filePath));

//常规化一个路径
console.log(path.normalize('/Users//wangzhen\/Desktop/////1.txt'));

//两个路径之间的相对路径
console.log(path.relative(filePath, '/Users/wangzhen/Desktop/124'));

//和join相似 , 将多个路径合并为同一个, 但是resolve 可以合并相同的路径
console.log(path.resolve('/Users/wangzhen/', '/Users/wangzhen/Desktop/124', '21312/3.txt'));

//获取当前操作系统的路径分割符
console.log(path.sep);

/*
*     The path.win32 property provides access to Windows-specific implementations of the path methods.
      Note: On Windows, both the forward slash (/) and backward slash (\) characters are accepted as path delimiters;
      however, only the backward slash (\) will be used in return values.
* */
console.log(path.win32);


/*
*
*   The path.posix property provides access to POSIX specific implementations of the path methods.
* */
console.log(path.posix);