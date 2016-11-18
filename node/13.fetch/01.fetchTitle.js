/**
 * Created by wangzhen on 16/11/18.
 */

const cheerio = require('cheerio');
const http = require('http');
const fs = require('fs');
const path = require('path');

http.get('http://www.cnblogs.com', function(res){
    //console.log(res.rawHeaders);
    var rawData = '';
    res.on('data', function(data){
        //console.log(data.toString());
        rawData += data.toString();
    });
    res.on('end', function(){
        //console.log('end');
        const fun = cheerio.load(rawData);
        var links = fun('.titlelnk');
        links.each(function(i, item){
            var href = item.attribs.href;
            //console.log(item.attribs.href);
            //console.log(item.children[0].data);
            var title = item.children[0].data;
            http.get(href, function(res){

                var content = '';
                res.on('data', function(data){
                    content += data.toString();
                });
                res.on('end', function(){
                    const fun = cheerio.load(content);
                    var post = fun('#main').html();
                    console.log(post);
                    //console.log(title.children);
                    saveData(title, post)
                });

            });
        });
    });
});

function saveData(title, content){
    var filePath = path.join(__dirname, 'post');
    try {
        fs.statSync(filePath);
    }catch (error){
        fs.mkdirSync(filePath);
    }
    filePath = path.join(filePath, title+'.html');
    fs.writeFileSync(filePath, content)
}

