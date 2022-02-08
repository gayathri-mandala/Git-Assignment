const request = require('request');
const fs = require('fs');

//const url = 'https://jsonplaceholder.typicode.com/posts';

const url = 'http://www.google.com';


request(url, (err,res,body)=>{
    if(err) console.log(err)

    //console.log(body);
    fs.writeFile('data3.html', body, 'utf8', (err)=>{
        if(err) return err;
        console.log('pulled data and created file')

    })
})