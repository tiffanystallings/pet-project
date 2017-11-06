(function init() {
	var egg_static = loadImage('/static/images/egg_ph.gif'),
		egg_wobble = loadImage('/static/images/wobble_ph.gif'),
		egg_shadow = loadImage('/static/images/shadow_ph.gif');

	egg_shadow.onload = function() {
		egg_shadow.setAttribute('class', 'shadow');
		$('#canvas').append(egg_shadow);
	}
	egg_wobble.onload = function() {
		egg_wobble.setAttribute('class', 'egg');
	}
	egg_static.onload = function() {
		egg_static.setAttribute('class', 'egg');
		$('#canvas').append(egg_static);
	}
})()

function loadImage(uri) {
	var img = new Image();
	img.src = uri;

	return img;
}