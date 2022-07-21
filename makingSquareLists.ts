let count : number = 1;
let oneToNine : number = 1;

let column : string = "column";
let row : string = "row";
let box : string = "box";

let columnNumber;
let rowNumber;
let boxNumber;


let squaresList : any = [];

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];
let row9 = [];

let column1 = [];
let column2 = [];
let column3 = [];
let column4 = [];
let column5 = [];
let column6 = [];
let column7 = [];
let column8 = [];
let column9 = [];

let box1 = [];
let box2 = [];
let box3 = [];
let box4 = [];
let box5 = [];
let box6 = [];
let box7 = [];
let box8 = [];
let box9 = [];




for(let x = 0; x < canvas.width - 1; x += 40){
    for (let y = 0; y < canvas.height - 1; y += 40){

        (oneToNine === 0)? oneToNine = 1 : oneToNine *= 1;

        // column
        column = "column" + oneToNine.toFixed(0);

        switch(oneToNine){
            case 1:
                columnNumber = column1;
                break;
            case 2:
                columnNumber = column2;
                break;
            case 3:
                columnNumber = column3;
                break;
            case 4:
                columnNumber = column4;
                break;
            case 5:
                columnNumber = column5;
                break;
            case 6:
                columnNumber = column6;
                break;
            case 7:
                columnNumber = column7;
                break;
            case 8:
                columnNumber = column8;
                break;
            case 9:
                columnNumber = column9;
                break;
        }

        // box
        switch(count){
            case 1: case 2: case 3: case 10: case 11: case 12: case 19: case 20: case 21:
                box = "box1"; boxNumber = box1;
                break;
            case 4: case 5: case 6: case 13: case 14: case 15: case 22: case 23: case 24:
                box = "box2"; boxNumber = box2;
                break;
            case 7: case 8: case 9: case 16: case 17: case 18: case 25: case 26: case 27:
                box = "box3"; boxNumber = box3;
                break; 
            case 28: case 29: case 30: case 37: case 38: case 39: case 46: case 55: case 64:
                box = "box4"; boxNumber = box4;
                break;
            case 31: case 32: case 33: case 40: case 41: case 42: case 49: case 50: case 51:
                box = "box5"; boxNumber = box5;
                break;
            case 34: case 35: case 36: case 43: case 44: case 45: case 52: case 53: case 54:
                box = "box6"; boxNumber = box6;
                break;
            case 55: case 56: case 57: case 64: case 65: case 66: case 73: case 74: case 75:
                box = "box7"; boxNumber = box7;
                break;
            case 58: case 59: case 60: case 67: case 68: case 69: case 76: case 77: case 78:
                box = "box8"; boxNumber = box8;
                break;
            case 61: case 62: case 63: case 70: case 71: case 72: case 79: case 80: case 81:
                box = "box9"; boxNumber = box9;
                break;
        }

        // row
        switch(true){
            case(count <= 9):
                row = "row1"; rowNumber = row1;
                break;
            case(count <= 18):
                row = "row2"; rowNumber = row2;
                break;
            case(count <= 27):
                row = "row3"; rowNumber = row3;
                break;
            case(count <= 36):
                row = "row4"; rowNumber = row4;
                break;
            case(count <= 45):
                row = "row5"; rowNumber = row5;
                break;
            case(count <= 54):
                row = "row6"; rowNumber = row6;
                break;
            case(count <= 63):
                row = "row7"; rowNumber = row7;
                break;
            case(count <= 72):
                row = "row8"; rowNumber = row8;
                break;
            case(count <= 81):
                row = "row9"; rowNumber = row9;
                break;
        }
        
        let s : Square = new Square(column, row, box, x, y, "red");
        squaresList.push(s);
        boxNumber.push(s);
        rowNumber.push(s);
        columnNumber.push(s);
        count++; oneToNine++;
        (oneToNine === 10)? oneToNine = 0 : oneToNine *= 1;
    }
}

console.log(squaresList);

console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);
console.log(box5);
console.log(box6);
console.log(box7);
console.log(box8);
console.log(box9);



