
const {Readable} = require('stream');

// console.log(Readable);

// const rs = new Readable();


class MyReadStream extends Readable{
	constructor(){
		super();
		this.index = 0;
	}

	_read(){
		this.index++;
		if(this.index > 5){
			this.push(null)
		}else{
			let str = ''+this.index;
			let buf = Buffer.from(str);
			this.push(buf)
		}
	}
}

const rs = new MyReadStream();
let body = '';
rs.on('data',(chunk)=>{
	// console.log(chunk.toString());
	body += chunk;
});

rs.on('end',()=>{
	console.log('body...',body);
	console.log('end....');
});

rs.pipe(process.stdout);
