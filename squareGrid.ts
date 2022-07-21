const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


class Square {
    column : string;
    row : string;
    box : string;
    xCoordinate : number;
    yCoordinate : number;
    color : string;

    constructor (column : string, row : string, box : string, xCoordiante : number, yCoordinate : number, color : string = "white"){
        this.column = column;
        this.row = row;
        this.box = box;
        this.xCoordinate = xCoordiante;
        this.yCoordinate = yCoordinate;
        this.color = color;
    }

    replaceColor (color : string){
        this.color = color;
    }

    makeColorGrid(xMin : number, yMin : number, xMax : number, yMax : number, inc : number, width : number = 1) {
        // making vertical lines
        for (let xUpdate = xMin; xUpdate < xMax; xUpdate += inc){
            for (let yUpdate = yMin; yUpdate <= yMax; yUpdate++){
                    this.fillCircle(xUpdate, yUpdate, width);
            
            }
        }
    
        // making horizontal lines
        for (let yUpdate = yMin; yUpdate < yMax; yUpdate += inc){ 
            for (let xUpdate = xMin; xUpdate < xMax; xUpdate++){
                    this.fillCircle(xUpdate, yUpdate, width);
                
            }
        }
    }

    fillCircle(x : number, y : number, width : number = 1) : void {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, width, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
    
}
