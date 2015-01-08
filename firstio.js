var fs = require('fs');
var contentOfFile = fs.readFileSync(process.argv[2]);
var numOflLines = (contentOfFile.toString().split('\n').length)-1;
console.log(numOflLines);