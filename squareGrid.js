var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var Square = /** @class */ (function () {
    function Square(column, row, box, xCoordiante, yCoordinate, color) {
        if (color === void 0) { color = "white"; }
        this.column = column;
        this.row = row;
        this.box = box;
        this.xCoordinate = xCoordiante;
        this.yCoordinate = yCoordinate;
        this.color = color;
    }
    Square.prototype.replaceColor = function (color) {
        this.color = color;
    };
    return Square;
}());
