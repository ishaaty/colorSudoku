let currentColor = document.querySelector("#currentColor") as HTMLParagraphElement;



window.addEventListener("load", function () {
    let grid : Square = squaresList[0];
    grid.replaceColor("white");
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    grid.makeColorGrid(0, 0, canvas.height, canvas.width, 120, 3);
    
});

canvas.addEventListener("click", function (event: MouseEvent){
    for (const s of squaresList) {
        if ((event.offsetX >= s.xCoordinate - 40 && event.offsetX <= s.xCoordinate) && (event.offsetY >= s.yCoordinate - 40 && event.offsetY <= s.yCoordinate)){
            s.makeColorGrid(s.xCoordinate - 37, s.yCoordinate - 37, s.xCoordinate - 2, s.yCoordinate - 2, 1, 1);
        } else if ((event.offsetX >= s.xCoordinate && event.offsetX <= s.xCoordinate + 40) && (event.offsetY >= s.yCoordinate && event.offsetY <= s.yCoordinate + 40)){
            s.makeColorGrid(s.xCoordinate + 3, s.yCoordinate + 3, s.xCoordinate + 38, s.yCoordinate + 38, 1, 1);
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

