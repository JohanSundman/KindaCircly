var animation = new Animation(0, document.getElementById('frame'), 60);
animation.start();
var circles = 1;
setInterval(function(){
	animation.switchAmount(circles);
	circles++;
}, 1000 / 2);
