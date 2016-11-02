/**
 * Created by wangzhen on 16/11/2.
 */

var users = {
    admin : 'adminpwd',
    user : "userpwd",
    guest : 'guestpwd'
};
//欢迎信息
var welcomeMsg = " ******************************************************************************\n *****                                                                   ******\n *****                        welcome login zhen sys                     ******\n *****                                                                   ******\n ******************************************************************************\n";


process.stdout.write(welcomeMsg);
process.stdout.write('please enter user name: ');
//var isInputUserName = true;
var currentUser = null;
process.stdin.on('data', (input) => {
    input = input.toString().trim();
    if(!currentUser){
        if(Object.keys(users).indexOf(input) === -1){
            process.stdout.write(`${input} not exist !\n`);
        }else{
            process.stdout.write('please enter user password: ');
            currentUser = input;
        }
    }else{
        if(users[currentUser] == input){
            process.stdout.write('login success! \n');
            process.exit();
        }else{
            process.stdout.write('password error! enter again: ');
        }
    }
});


