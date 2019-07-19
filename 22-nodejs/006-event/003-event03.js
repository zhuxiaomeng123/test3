
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
let fn1 = ()=>{
	console.log('test1.....')
}
let fn2 = ()=>{
	console.log('test2.....')
}

myEmitter.on('test',fn1);
myEmitter.on('test',fn2);
console.log(myEmitter.listeners('test'));

myEmitter.removeListener('test',fn1)
// myEmitter.off('test',fn1);
// console.log(myEmitter.off === myEmitter.removeListener);

console.log(myEmitter.listeners('test'));

myEmitter.emit('test');


