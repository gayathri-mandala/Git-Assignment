const request = require('request')
var EventEmitter= require('events');
var emitter=new EventEmitter();
var url = 'https://jsonplaceholder.typicode.com/todos/1';
request(url, (error, response, body)=>{
    if(error) console.log(error)
    console.log(response.statusCode);
    console.log(body);
});
emitter.on('newEvent',(message)=>{
    console.log(`Message:${message}`);
});
emitter.emit('newEvent',"Reading the content in the url");