
const mongoose = require('mongoose');
const UserModel = require('./models/user.js')
const BlogModel = require('./models/blog.js')

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
});

db.once('open',()=>{
	console.log('db connected ok....');
	
	UserModel.distinct('name',{},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('distinct error:::',err);
		}			
	})

});