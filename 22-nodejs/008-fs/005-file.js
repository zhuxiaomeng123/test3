
const fs = require('fs');

// fs.writeFileSync('./001.txt','ccc',{flag:'a'});

//let data = fs.readFileSync('./001.txt');
//console.log(data.toString());

/*
fs.writeFile('./001.txt','zzz\n',{flag:'a'},(err)=>{
	if(!err){
		console.log('write success...');
	}else{
		console.log('write fail...');
	}
})
*/
fs.readFile('./001.txt',(err,data)=>{
	if(!err){
		console.log('read file success...');
		console.log(data);
	}else{
		console.log('read file fail...',err);
	}
});