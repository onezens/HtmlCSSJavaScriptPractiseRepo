/**
 * Created by wangzhen on 16/11/18.
 */

const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const http = require('http');
const entities = require("entities");

const baseUrl = 'http://m.xs84.me';
const fetchUrl = '/175338_0/';
http.get(baseUrl+fetchUrl, function(res){
    var content = '';
    res.on('data', function(data){
        content += data.toString();
    });
    res.on('end', function(){
        analyseContentList(content);
    });
});

function analyseContentList(data) {
    var $ = cheerio.load(entities.decode(data)); //Unicode 转换为utf8
    var lists = $('.directoryArea')[0];
    //console.log(lists.children[1].children[0].children[0]);

    lists.children.forEach(function(list){
        if(list.name === 'p'){
            //console.log(list.children);
            var a = list.children[0]
            list.children.forEach(function(a){
                if(a.name === 'a'){
                    //console.log('****************************************');
                    //console.log(a);
                    var href = a.attribs.href;
                    var title = a.children[0].data;
                    console.log(`${href}   ${title} `);
                    fetchContent(href, title);
                }
            });
        }
    });
}

function fetchContent(href, title) {
    http.get(baseUrl+href, function(res){
        var content = '';
        res.on('data', function(data){
            content += data.toString();
        });
        res.on('end', function(){
            var $ = cheerio.load(content);
            var chaptercontent = $('#chaptercontent').html();
            //console.log(entities.decode(chaptercontent));
            saveContent(title, chaptercontent);
        });
    });
}

function saveContent(title, content) {
    var filePath = path.join(__dirname, 'novel');
    try {
        fs.statSync(filePath);
    }catch (error){
        fs.mkdirSync(filePath);
    }
    filePath = path.join(filePath, title + '.html')
    console.log(filePath);
    fs.writeFile(filePath, content);
}