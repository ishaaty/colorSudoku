var currentColor = document.querySelector("#currentColor");
window.addEventListener("load", function () {
    var grid = squaresList[0];
    grid.replaceColor("white");
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
        for (var _i = 0, squaresList_2 = squaresList; _i < squaresList_2.length; _i++) {
            var s = squaresList_2[_i];
            s.replaceColor(clickedColor.dataset.key);
        }
    });
});
