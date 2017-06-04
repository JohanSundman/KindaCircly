function Animation(circles, canvasEl, fps = 60){
	this.canvasSetup(canvasEl);
	this.switchAmount(circles);
	this.fps = fps;
}

Animation.prototype.canvasSetup = function(canvasEl){
	var self = this; // For the event call
	this.canvas = canvasEl;
	this.ctx = canvasEl.getContext('2d');

	// Event setup
	window.addEventListener('resize', function(){
		self.resize();
	});
}

Animation.prototype.resize = function(){
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.croping(); // Crop it when it resizes, and after new size is set
}

// Method that will make sure the graphical variables are up to size
Animation.prototype.croping = function(){
	this.bounds = Math.min(this.canvas.width, this.canvas.height);
	this.circleSpacing = (this.bounds / this.circleAmount) / 2; // Additional piece cause the first one is not desired. Divide by 2 cause it's a radius

	for(var i = 0; i < this.circle.length; i++){
		this.circle[i].define(this.circleSpacing*(i+1)); //!!!!!! The parameter and the same value as in the top should have their own function to get it
	}
}


Animation.prototype.switchAmount = function(amount){
	this.circleAmount = amount;
	this.circle = [];

	for(var i = 0; i < this.circleAmount; i++){
		this.circle.push(new CircleShape(this.circleSpacing*(i+1), 3+i));
	}
	this.resize();
}


Animation.prototype.start = function(){
	var self = this;
	this.stop(); // Make sure the current interval is stopped, don't want double execution
	this.interval = setInterval(function(){
		self.loop();
	}, 1000 / this.fps);
}

Animation.prototype.stop = function(){
	clearInterval(this.interval);
}



Animation.prototype.loop = function(){
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

	// Go through the circles
	for(var c = 0; c < this.circle.length; c++){
		this.ctx.beginPath();
		this.ctx.moveTo(this.circle[c].shape[0].x + window.innerWidth/2, this.circle[c].shape[0].y + window.innerHeight/2); // First point
		
		// Go through the circle points
		for(var p = 1; p < this.circle[c].shape.length; p++){
			// Each point apart from the first one
			this.ctx.lineTo(this.circle[c].shape[p].x + window.innerWidth/2, this.circle[c].shape[p].y + window.innerHeight/2);
		}
		this.ctx.lineTo(this.circle[c].shape[0].x + window.innerWidth/2, 
				   this.circle[c].shape[0].y + window.innerHeight/2); // First point
		this.ctx.closePath();
		this.ctx.stroke();
	}
}
