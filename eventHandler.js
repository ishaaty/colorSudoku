var currentColor = document.querySelector("#currentColor");
var count = 1;
var oneToNine = 1;
var color = "white";
var column = "column";
var row = "row";
var box = "box";
var allCoordinates = [];
var squaresList = [];
for (var x = 0; x < canvas.width - 1; x += 40) {
    for (var y = 0; y < canvas.height - 1; y += 40) {
        allCoordinates.push([x, y]);
        (oneToNine === 0) ? oneToNine = 1 : oneToNine *= 1;
        // column
        column = "column" + oneToNine.toFixed(0);
        // box
        switch (count) {
            case 1:
            case 2:
            case 3:
            case 10:
            case 11:
            case 12:
            case 19:
            case 20:
            case 21:
                box = "box1";
                break;
            case 4:
            case 5:
            case 6:
            case 13:
            case 14:
            case 15:
            case 22:
            case 23:
            case 24:
                box = "box2";
                break;
            case 7:
            case 8:
            case 9:
            case 16:
            case 17:
            case 18:
            case 25:
            case 26:
            case 27:
                box = "box3";
                break;
            case 28:
            case 29:
            case 30:
            case 37:
            case 38:
            case 39:
            case 46:
            case 55:
            case 64:
                box = "box4";
                break;
            case 31:
            case 32:
            case 33:
            case 40:
            case 41:
            case 42:
            case 49:
            case 50:
            case 51:
                box = "box5";
                break;
            case 34:
            case 35:
            case 36:
            case 43:
            case 44:
            case 45:
            case 52:
            case 53:
            case 54:
                box = "box6";
                break;
            case 55:
            case 56:
            case 57:
            case 64:
            case 65:
            case 66:
            case 73:
            case 74:
            case 75:
                box = "box7";
                break;
            case 58:
            case 59:
            case 60:
            case 67:
            case 68:
            case 69:
            case 76:
            case 77:
            case 78:
                box = "box8";
                break;
            case 61:
            case 62:
            case 63:
            case 70:
            case 71:
            case 72:
            case 79:
            case 80:
            case 81:
                box = "box9";
                break;
        }
        // row
        switch (true) {
            case (count <= 9):
                row = "row1";
                break;
            case (count <= 18):
                row = "row2";
                break;
            case (count <= 27):
                row = "row3";
                break;
            case (count <= 36):
                row = "row4";
                break;
            case (count <= 45):
                row = "row5";
                break;
            case (count <= 54):
                row = "row6";
                break;
            case (count <= 63):
                row = "row7";
                break;
            case (count <= 72):
                row = "row8";
                break;
            case (count <= 81):
                row = "row9";
                break;
        }
        var s = new Square(column, row, box, x, y, "red");
        squaresList.push(s);
        count++;
        oneToNine++;
        (oneToNine === 10) ? oneToNine = 0 : oneToNine *= 1;
    }
}
console.log(squaresList);
window.addEventListener("load", function () {
    makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    makeColorGrid(0, 0, canvas.height, canvas.width, 120, 3);
});
canvas.addEventListener("click", function (event) {
    for (var _i = 0, allCoordinates_1 = allCoordinates; _i < allCoordinates_1.length; _i++) {
        var c = allCoordinates_1[_i];
        color = "white";
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