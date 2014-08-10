var splitnlines 	= 	require('../');
var fs 				=	require('fs');

fs.createReadStream(__dirname+"/pg1661.txt").pipe(splitnlines(500)).pipe(process.stdout);