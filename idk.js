var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var currentColor = document.querySelector("#currentColor");
var count = 0;
var color = "white";
var allCoordinates = [];
for (var x = 0; x <= canvas.height; x += 40) {
    for (var y = 0; y <= canvas.width; y += 40) {
        allCoordinates.push([x, y]);
    }
}
window.addEventListener("load", function () {
    makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    makeColorGrid(0, 0, canvas.height, canvas.width, 120, 2);
});
canvas.addEventListener("click", function (event) {
    for (var _i = 0, allCoordinates_1 = allCoordinates; _i < allCoordinates_1.length; _i++) {
        var c = allCoordinates_1[_i];
        if ((event.offsetX >= c[0] - 40 && event.offsetX <= c[0]) && (event.offsetY >= c[1] - 40 && event.offsetY <= c[1])) {
            makeColorGrid(c[0] - 37, c[1] - 37, c[0] - 2, c[1] - 2, 1, 1);
        }
    }
});
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        currentColor.textContent = ("Current Color: ".concat(clickedColor.dataset.key));
        for (var _i = 0, allCoordinates_2 = allCoordinates; _i < allCoordinates_2.length; _i++) {
            var c = allCoordinates_2[_i];
            color = clickedColor.dataset.key;
        }
    });
});
function makeColorGrid(xMin, yMin, xMax, yMax, inc, width) {
    if (width === void 0) { width = 1; }
    // making vertical lines
    for (var xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
        for (var yUpdate = yMin; yUpdate <= yMax; yUpdate++) {
            fillCircle(xUpdate, yUpdate, width);
        }
    }
    // making horizontal lines
    for (var yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
        for (var xUpdate = xMin; xUpdate < xMax; xUpdate++) {
            fillCircle(xUpdate, yUpdate, width);
        }
    }
}
function fillCircle(x, y, width) {
    if (width === void 0) { width = 1; }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, width, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}
