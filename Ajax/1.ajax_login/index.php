<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>baidu</title>
    <style>
        *{
          margin: 0px;
          padding: 0px
        }
        .wrapper {
          width: 1024px;
          margin: 0 auto;
          position: relative;
        }
        .logo {
          margin: 0 auto;
          width: 540px
        }
        .input_box {
          width: 604px;
          margin: 0 auto;
        }
        .input_box > .search {
          width: 520px;
          height: 40px;
          font-size: 20px;
          line-height: 2；
          float: left;
        }
        .input_box > .search_btn {
          width: 80px;
          height: 44px;
          border: 1px solid #ccc;
          float: right;
          font-size: 17px;
        }

        
        #loginBtn {
          float: right;
          margin: 10px;
          width: 50px;
          height: 40px;
        }

        .loginForm {
          width: 300px;
          height: 180px;
          background-color: rgba(230, 230, 230, 0.9);
          margin: 0 auto;
          text-align: center;
          padding-top: 50px;
          position: absolute;
          top: 100px;
          left: 50%;
          margin-left: -150px;
          display: none;
        }
        .loginForm p {
          margin: 20px
        }
        #login_btn, #login_cancel {
          width: 60px;
          height: 40px;

        }
    </style>
  </head>
  <body>
    <div class="wrapper">
    <p><input type="button" value='登录' id="loginBtn"></p>
    <div class="logo">
      <img src="./baidu.png" alt="">
    </div>
    <div class="input_box">
      <input type="text" name="search_input" class="search">
      <input type="button" value="百度" class="search_btn">
    </div>
    <div class="loginForm">
      <form>
        <p>用户名：<input type="text" id="login_usename" name='username'></p>
        <p>密&nbsp;&nbsp;&nbsp;码：<input type="password" id="login_password" name='password'></p>
        <p>
          <input type="button" value='登录' id='login_btn'>
          <input type="button" value='取消' id='login_cancel'>
        </p>
      </form>
    </div>
    </div>
    <script>
      function ajax (param, cb) {
        var xhr = null;
        if(window.ActiveXObject){
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }else if(window.XMLHttpRequest){
          xhr = new XMLHttpRequest();
        }
        if (xhr == null) { return};

        xhr.open('POST', './login.php', true);

        xhr.setRequestHeader('Content-type' , 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function(){

          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              cb(xhr.responseText);

            }else{
              alert('请求失败！');
            }
          }
        };

        param = (function(obj){
          var str = ''
          for(var key in obj){
            str += key + '=' + obj[key] + '&';
          }
          return str;
        })(param);

        console.log(param);

        xhr.send(param);
      }

      window.onload = function(){

        var loginForm = document.querySelector('.loginForm');
        var showLoginFormBtn = document.querySelector('#loginBtn');
        var submitBtn = document.querySelector('#login_btn');
        var cancelBtn = document.querySelector('#login_cancel');

        showLoginFormBtn.addEventListener('click', function(){
          loginForm.style.display = 'block';
        });

        cancelBtn.addEventListener('click', function(){
          loginForm.style.display = 'none';
        });

        submitBtn.addEventListener('click', function(){
          var username = document.querySelector('#login_usename');
          var password = document.querySelector('#login_password');
          var data = {
            username: username.value,
            password: password.value
          }
          ajax(data, function(res){
            if(res == 1){
              loginForm.style.display = 'none';
              alert('登录成功！');
            }else{
              alert('用户名或者密码错误！');
            }
          });
        });


      };
    </script>

  </body>
</html>
