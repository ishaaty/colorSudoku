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
    Square.prototype.makeColorGrid = function (xMin, yMin, xMax, yMax, inc, width) {
        if (width === void 0) { width = 1; }
        // making vertical lines
        for (var xUpdate = xMin; xUpdate < xMax; xUpdate += inc) {
            for (var yUpdate = yMin; yUpdate <= yMax; yUpdate++) {
                this.fillCircle(xUpdate, yUpdate, width);
            }
        }
        // making horizontal lines
        for (var yUpdate = yMin; yUpdate < yMax; yUpdate += inc) {
            for (var xUpdate = xMin; xUpdate < xMax; xUpdate++) {
                this.fillCircle(xUpdate, yUpdate, width);
            }
        }
    };
    Square.prototype.fillCircle = function (x, y, width) {
        if (width === void 0) { width = 1; }
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x, y, width, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };
    return Square;
}());
