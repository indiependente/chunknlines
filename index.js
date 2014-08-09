var split 		=	require('binary-split');
var tr 			=	require('through');
var combine 	=	require('stream-combiner');

module.exports = function(NLINE) {
	if ( NLINE !== parseInt(NLINE)) {
		NLINE = 1;
	}

	var items = [];

	function write(data){
		items.push(data.toString());
		if (items.length >= NLINE){
				this.queue(items.join('\n').concat('\n'));
				items = [];
		}
	}
	function end(){
		if(items.length !== 0)
			this.queue(items.join('\n').concat('\n'));
		this.queue(null);
	}

	return combine(split(), tr(write, end));
};