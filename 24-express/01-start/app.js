
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
	res.send("<h1>hello 你好 跨猪</h1>");
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})