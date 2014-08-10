chunknlines
===========

Node.js n-lines chunker stream module
##What it does
This stream helps you create chunks from an input. It's very useful when dealing with big files.

This module takes text in input and sends in output chunk made by n-lines. Where n is the only argument that it needs, but it can be omitted. Simple.


##Usage
var chunknlines 	= 	require('chunknlines');

stream.pipe(chunknlines([NLINES]).pipe(anotherstream);

#####Argument:
- NLINES: the number of lines in a single chunk (default = 1)

##Example
The example code below, echoes what we write on standard input every 3 new lines.

```javascript
var chunknlines 	= 	require('chunknlines');

process.stdin.pipe(chunknlines(3)).pipe(process.stdout);
```

##License
####MIT
