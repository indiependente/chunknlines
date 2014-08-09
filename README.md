splitnlines
===========

Node.js n-lines splitter stream module
##What it does
This stream module takes text in input and sends in output chunk made by n-lines. Where n is the only argument that it needs. Simple.


##Usage
var splitnlines 	= 	require('splitnlines');

stream.pipe(splitnlines(NLINES).pipe(anotherstream);

#####Argument:
- NLINES: the number of lines in a single chunk

##Example
The example code below, echoes what we write on standard input every 3 new lines.

```javascript
var splitnlines 	= 	require('splitnlines');

process.stdin.pipe(splitnlines(3)).pipe(process.stdout);
```

##License
####MIT
