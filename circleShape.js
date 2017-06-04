
function CircleShape(radius, points = null){
	this.points = points == null ? Math.floor(Math.random()*15)+3 : points;
	this.angleDist = (2*Math.PI) / this.points; // In radians
	this.define(radius); // Set the points
}

CircleShape.prototype.define = function(radius){
	this.radius = radius;
	this.shape = []; // The relative coordinates of the shape
	// Calculate the shape positions
	for(var i = 0; i < this.points; i++){
		this.addToShape(this.angleDist * i - (2*Math.PI / 4)); // This angle instance - 1/4 of the full circle to align it upwards
	}
}

CircleShape.prototype.addToShape = function(angle){
	var pos = {};
	// Trigonometry to get the point on the circle
	pos.x = this.radius * Math.cos(angle);
	pos.y = this.radius * Math.sin(angle);
	this.shape.push(pos);
}
