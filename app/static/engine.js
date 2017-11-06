var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		egg = new Image();
	egg.src = '/static/images/egg_ph.png';

	canvas.width = 300;
	canvas.height = 300;
	$('#canvas').append(canvas);

	function init() {
		ctx.clearRect(0, 0, 300, 300);
		ctx.drawImage(egg, 0, 0);
	}

	egg.onload = function() {
		init();
	}
})(this);