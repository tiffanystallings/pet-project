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
		var eggx = 150 - (egg.width/2),
			eggy = 150 - (egg.height/2);
		ctx.clearRect(0, 0, 300, 300);
		ctx.drawImage(egg, eggx, eggy);
	}

	egg.onload = function() {
		init();
	}
})(this);