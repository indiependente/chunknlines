var splitnlines 	= 	require('./');
var fs 				=	require('fs');
console.dir(splitnlines);
fs.createReadStream("pg1661.txt").pipe(splitnlines(500)).pipe(process.stdout);