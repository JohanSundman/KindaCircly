// Init the canvas
var canvas = document.getElementById('frame');
var ctx = canvas.getContext('2d');

// Set the window size
(function(){
	function resize(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
	window.addEventListener('resize', resize);
	resize();
})();
