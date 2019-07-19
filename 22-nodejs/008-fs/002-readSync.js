
const fs = require('fs');

//open file
let fd = fs.openSync('./001.txt','r');

let buf = Buffer.alloc(100);

console.log(buf);

fs.readSync(fd,buf,0,100,0);

fs.closeSync(fd);

console.log(buf);