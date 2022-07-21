let currentColor = document.querySelector("#currentColor") as HTMLParagraphElement;

window.addEventListener("load", function () {
    let grid : Square = squaresList[0];
    grid.replaceColor("white");
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 120, 3);
    grid.replaceColor("red");
    
});

canvas.addEventListener("click", function (event: MouseEvent){
    for (const s of squaresList) {
        if ((event.offsetX >= s.xCoordinate && event.offsetX <= s.xCoordinate + 40) && (event.offsetY >= s.yCoordinate && event.offsetY <= s.yCoordinate + 40)){
            s.makeColorGrid(s.xCoordinate + 4, s.yCoordinate + 4, s.xCoordinate + 37, s.yCoordinate + 37, 1, 1);
        }
    }
});

document.querySelectorAll<HTMLElement>(".colorBtn").forEach(function(elm){
    elm.addEventListener("click", function (event : MouseEvent){
        let clickedColor = event.currentTarget as HTMLElement;
        currentColor.textContent = (`Current Color: ${clickedColor.dataset.key}`);
        for (const s of squaresList){
            s.replaceColor(clickedColor.dataset.key);
        }
    })
});

