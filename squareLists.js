var count = 1;
var oneToNine = 1;
var column = "column";
var row = "row";
var box = "box";
var squaresList = [];
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var row6 = [];
var row7 = [];
var row8 = [];
var row9 = [];
var column1 = [];
var column2 = [];
var column3 = [];
var column4 = [];
var column5 = [];
var column6 = [];
var column7 = [];
var column8 = [];
var column9 = [];
var box1 = [];
var box2 = [];
var box3 = [];
var box4 = [];
var box5 = [];
var box6 = [];
var box7 = [];
var box8 = [];
var box9 = [];
for (var x = 0; x < canvas.width - 1; x += 40) {
    for (var y = 0; y < canvas.height - 1; y += 40) {
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
