// var triangle = require("./triangle.js");
// var square = require("./square");
// var pentagon = require("./pentagon");


'use strict';

// A standard constructor function.
function Shape () {
  this.type = "shape2";
}

// Attaching a prototype function.
Shape.prototype.get_type = function () {
    return this.constructor;
}

module.exports = Shape;