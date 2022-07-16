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

    // fill & makeColorGrid
}
