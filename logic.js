function init(){
	var bounds = Math.min(canvas.width, canvas.height);
	var circleAmount = 8;
	var circleSpacing = Math.floor(bounds / circleAmount) / 2; // Additional piece cause the first one is not desired. Divide by 2 cause it's a radius
	var circle = [];

	for(var i = 0; i < circleAmount; i++){
		circle.push(new CircleShape(circleSpacing*(i+1), 3+i));
	}

	// Render loop
	setInterval(function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);

		// Go through the circles
		for(var c = 0; c < circle.length; c++){
			ctx.beginPath();
			ctx.moveTo(circle[c].shape[0].x + window.innerWidth/2, circle[c].shape[0].y + window.innerHeight/2); // First point
			
			// Go through the circle points
			for(var p = 1; p < circle[c].shape.length; p++){
				// Each point apart from the first one
				ctx.lineTo(circle[c].shape[p].x + window.innerWidth/2, circle[c].shape[p].y + window.innerHeight/2);
			}
			ctx.lineTo(circle[c].shape[0].x + window.innerWidth/2, 
					   circle[c].shape[0].y + window.innerHeight/2); // First point
			ctx.closePath();
			ctx.stroke();
		}
	}, 1000 / 60);
}

init();
