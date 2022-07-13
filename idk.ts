const currentColor = document.querySelector("#currentColor") as HTMLParagraphElement;

let count : number = 0;
let oneToNine : number = 1;
let color : string = "white";

let allCoordinates = []
let squaresList : any = [];

for(let x = 0; x <= canvas.height; x += 40){
    for (let y = 0; y <= canvas.width; y += 40){
        count++;
        if ((count - oneToNine) % 10 === 0){
            let square : Square = new Square("column" + oneToNine.toFixed(0), x, y, "red");
            squaresList.push(square);
        }

        oneToNine++;
        if (oneToNine === 10)
            oneToNine = 1;
        
    }
}


window.addEventListener("load", function () {
    makeColorGrid(0, 0, canvas.height, canvas.width, 40);
    makeColorGrid(0, 0, canvas.height, canvas.width, 120, 2);
});

canvas.addEventListener("click", function (event: MouseEvent){
    for (const c of allCoordinates) {
        if ((event.offsetX >= c[0] - 40 && event.offsetX <= c[0]) && (event.offsetY >= c[1] - 40 && event.offsetY <= c[1])){
            makeColorGrid(c[0] - 37, c[1] - 37, c[0] - 2, c[1] - 2, 1, 1);
        }
    }
});


document.querySelectorAll<HTMLElement>(".colorBtn").forEach(function(elm){
    elm.addEventListener("click", function (event : MouseEvent){
        let clickedColor = event.currentTarget as HTMLElement;
        currentColor.textContent = (`Current Color: ${clickedColor.dataset.key}`);
        for (const c of allCoordinates){
            color = clickedColor.dataset.key as string;
        }
    })
});




function makeColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number, width : number = 1) {
    // making vertical lines
    for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc){
        for (let yUpdate = yMin; yUpdate <= yMax; yUpdate++){
                fillCircle(xUpdate, yUpdate, width);
        
        }
    }

    // making horizontal lines
    for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc){ 
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate++){
                fillCircle(xUpdate, yUpdate, width);
            
        }
    }
}


function fillCircle(x : number, y : number, width : number = 1) : void {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, width, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}