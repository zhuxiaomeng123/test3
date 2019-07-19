
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res,next)=>{
	console.log('home page....');
	next();
},(req,res)=>{
	console.log('home page next...');
	res.send('hello')
})

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

app.post('/',(req,res)=>{
	res.send("post data....");
})
app.put('/',(req,res)=>{
	res.send("put data....");
})
app.delete('/',(req,res)=>{
	res.send("delete data....");
})


app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})