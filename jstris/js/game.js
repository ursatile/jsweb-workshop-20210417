export class Position {
    constructor(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }
}

export class Cell {
    constructor(position) {
        this.position = position;
    }

    get key() {
        return `${this.position.rowIndex}:${this.position.colIndex}`;
    }
}

export class Block {
    constructor(name, cells) {
        this.name = name;
        this.cells = cells;
    }
}

export class Game {
    addBlock() {
        let cells = [
            new Cell(new Position(2,4)),
            new Cell(new Position(3,4)),
        ];
        let block = new Block('orange-ricky', cells);
        this.blocks.push(block);
    }
    constructor(rowCount, colCount) {
        this.rows = new Array();
        this.blocks = new Array();
        for(let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
            let row = new Array();
            for(let colIndex = 0; colIndex < colCount; colIndex++) {
                let position = new Position(rowIndex, colIndex);
                let cell = new Cell(position);
                row.push(cell);                                
            }
            this.rows.push(row);            
        }
    }

    get cells() {
        return this.rows.flat();
    }
}