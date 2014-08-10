var chunknlines 	= 	require('../');
var fs 				=	require('fs');

fs.createReadStream(__dirname+"/pg1661.txt").pipe(chunknlines(500)).pipe(process.stdout);