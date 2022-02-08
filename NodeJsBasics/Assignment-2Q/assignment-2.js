const handlebars = require('handlebars');
const fs = require('fs');

var data = fs.readFileSync('handlebarinput.json');
var jsondata = JSON.parse(data);

var template  = handlebars.compile(fs.readFileSync("temp.handlebars").toString());

var xml = template({input:jsondata});
console.log(xml);