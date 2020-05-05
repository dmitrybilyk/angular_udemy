function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
var count;
// count = 'a';
var a;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var backgroundColor = Color.RED;


