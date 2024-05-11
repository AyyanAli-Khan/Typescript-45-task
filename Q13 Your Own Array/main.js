var transportation = ["bike", "car", "truck"];
var statements = ["I like to ride", "I love to drive", "I hate to drive"];
var len = transportation.length;
for (var index = 0; index < len; index++) {
    console.log(" ".concat(statements[index], " ").concat(transportation[index]));
}
