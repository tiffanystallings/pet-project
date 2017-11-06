var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d');

	canvas.width = 300;
	canvas.height = 300;
	$('#canvas').append(canvas);
})(this);