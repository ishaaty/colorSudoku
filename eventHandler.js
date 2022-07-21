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
    var grid = squaresList[0];
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 120, 3);
});
canvas.addEventListener("click", function (event) {
    for (var _i = 0, squaresList_1 = squaresList; _i < squaresList_1.length; _i++) {
        var s = squaresList_1[_i];
        if ((event.offsetX >= s.xCoordinate - 40 && event.offsetX <= s.xCoordinate) && (event.offsetY >= s.yCoordinate - 40 && event.offsetY <= s.yCoordinate)) {
            s.makeColorGrid(s.xCoordinate - 37, s.yCoordinate - 37, s.xCoordinate - 2, s.yCoordinate - 2, 1, 1);
        }
        else if ((event.offsetX >= s.xCoordinate && event.offsetX <= s.xCoordinate + 40) && (event.offsetY >= s.yCoordinate && event.offsetY <= s.yCoordinate + 40)) {
            s.makeColorGrid(s.xCoordinate + 3, s.yCoordinate + 3, s.xCoordinate + 38, s.yCoordinate + 38, 1, 1);
        }
    }
});
document.querySelectorAll(".colorBtn").forEach(function (elm) {
    elm.addEventListener("click", function (event) {
        var clickedColor = event.currentTarget;
        currentColor.textContent = ("Current Color: ".concat(clickedColor.dataset.key));
        color = clickedColor.dataset.key;
    });
});
// function makeColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number, width : number = 1) {
//     // making vertical lines
//     for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc){
//         for (let yUpdate = yMin; yUpdate <= yMax; yUpdate++){
//                 fillCircle(xUpdate, yUpdate, width);
//         }
//     }
//     // making horizontal lines
//     for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc){ 
//         for (let xUpdate = xMin; xUpdate < xMax; xUpdate++){
//                 fillCircle(xUpdate, yUpdate, width);
//         }
//     }
// }
// function fillCircle(x : number, y : number, width : number = 1) : void {
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.arc(x, y, width, 0, Math.PI*2);
//     ctx.fill();
//     ctx.closePath();
// }
