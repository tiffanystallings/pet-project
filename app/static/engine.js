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
	ctx.translate(150, 150);
	ctx.save();

	function init() {
		win.requestAnimationFrame(wobble);
	}

	function wobble() {
		var eggx = -(egg.width/2),
			eggy = -(egg.height/2);
		ctx.clearRect(-150, -150, 300, 300);
		var time = new Date();
  		ctx.rotate(((0.05 * Math.PI) / 60) * time.getSeconds() + ((0.05 * Math.PI) / 60000) * time.getMilliseconds());
  		ctx.drawImage(egg, eggx, eggy);
  		win.requestAnimationFrame(wobble);
	}

	egg.onload = function() {
		init();
	}
})(this);