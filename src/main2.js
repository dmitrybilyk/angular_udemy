"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var message = 'abc';
var point = new point_1.Point(1);
// point.x = 1;
// point.y = 2;
var x = point.getX();
point.setX(10);
point.draw();
