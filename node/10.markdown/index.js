/**
 * Created by wangzhen on 16/11/9.
 */

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');

const target = process.argv[2] || path.join(__dirname, 'readme.md');
watchMDGenerateHtml();

//监控mardown文件的变化,并且实时生成html
function watchMDGenerateHtml() {
    var indexPath = path.basename(target, path.extname(target))+'.html';
    var writePath = path.join(path.dirname(target) , indexPath);
    try {
        fs.statSync(writePath)
    }catch(error) {
        //文件不存在则默认生成html文件
        generateHtml(writePath);
    }

//创建一个文件服务器
    browserSync({
        notify: false,
        server: path.dirname(target), // 网站根目录
        index: indexPath // 默认文档
    });

    fs.watchFile(target, {interval: 500}, function(curr, prev){
        //如果当前文件和修改前文档的修改时间一样则返回
        if(curr.mtime === prev.mtime){
            return;
        }
        generateHtml(writePath);
    });
}

//生成html文件
function generateHtml(writePath) {
    fs.readFile(target, 'utf8', function(err, data){
        if(err){
            throw err;
        }
        var html = marked(data);
        var css = fs.readFileSync(path.join(__dirname, 'github.css'), 'utf8');
        html = template.replace('{{{content}}}', html).replace('{{{styles}}', css);
        fs.writeFile(writePath, html, 'utf8', function(err){
            if(err){
                throw err;
            }
            console.log('generate html success!');
        });
    });
}

var template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>{{{styles}}}</style>
</head>
<body>
  <div class="vs">
    {{{content}}}
  </div>
</body>
</html>
`;