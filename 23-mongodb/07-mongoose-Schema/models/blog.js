
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  author: {
  	type:mongoose.Schema.Types.ObjectId
  },
  title:{
  	type:String
  },
  content:{
  	type:String
  }
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;