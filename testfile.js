'use strict';

var Shape = require('./shape.js'),
    Triangle = require('./triangle.js'),
   	Square = require('./square.js'),
    Pentagon = require('./pentagon.js');

// Let's give it a whirl...
var triangle = new Triangle(1, 2, 3);
var square = new Square(4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();

// Ensuring everything delegates to Shape...
console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());
console.log(shape);

console.log('-'.repeat(24));

// Ensuring instanceof works as expected.
console.log(triangle instanceof Triangle);
//console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
console.log(shape instanceof Shape);