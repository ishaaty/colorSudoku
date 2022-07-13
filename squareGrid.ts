const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


class Square {
    type : string;
    xCoordinate : number;
    yCoordinate : number;
    color : string;

    constructor (type : string, xCoordiante : number, yCoordinate : number, color? : string){
        this.type = type;
        this.xCoordinate = xCoordiante;
        this.yCoordinate = yCoordinate;
        this.color = color || "white";
    }

    replaceColor (color : string){
        this.color = color;
    }

    // fill & makeColorGrid
}