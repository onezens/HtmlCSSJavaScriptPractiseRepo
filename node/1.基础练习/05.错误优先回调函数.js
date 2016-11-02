/**
 * Created by wangzhen on 16/11/2.
 */

/* callback 作为回调函数,一般讲错误作为第一个参数, 赋值使用的时候要看看是否有错误 */
function isOuShu(number, callback){
    if(typeof number == 'number') {
        if(number % 2 == 0){
            callback(null, '输入的是偶数');
        }else{
            callback(null, '输入的是奇数');
        }
    }else{
        var error = new Error('输入的不是数字');
        //throw error;
        callback(error);
    }
}

isOuShu(10, function(error, msg){
    if(error){
        console.log(error);
    }else{
        console.log(msg);
    }
});

isOuShu('q3', function(error, msg){
    if(error){
        console.log(error);
    }else{
        console.log(msg);
    }
});

isOuShu(11, function(error, msg){
    if(error){
        console.log(error);
    }else{
        console.log(msg);
    }
});
