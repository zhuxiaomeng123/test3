
const fs = require('fs');

//1.打开文件
let fd = fs.openSync('./001.txt','a');
console.log(fd);
//2.写入内容
fs.writeSync(fd,'aaa');
//3.保存并退出
fs.closeSync(fd);

console.log('do somethi....');