var Shape = require("./shape.js");

function Square(side1,side2,side3,side4){
	Shape.apply(this, arguments)
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	// this.side5 = side5;
}

Square.prototype = new Shape();

Square.prototype.constructor = Square;

module.exports = Square;
