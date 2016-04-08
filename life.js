// const len = row.length;
        // return (
        //     i < 0 ? row[len-i] :
        //     i >= len  ? row[i-len] :
        //     row[i]
        // );
const wrapArray = (arr, i) => arr[i] || (i > 0 ? arr[i-arr.length] : arr[arr.length + i]);

export default class Life {
    constructor({size = 10, initFunc = ({x, y}) => 0}) {
        this.size = size;
        this.board = [];
        let row;
        for(let y=0;y<size;y++) {
            row = this.board[y] = [];
            for(let x=0;x<size;x++) {
                row[x] = initFunc({x, y});
            }
        }
    }
    textMode() {
        console.log(this.board.map((row) => row.map((col) => col ? '@' : '#' ).join('')).join('\n'));
    }
    setValue({x, y, value}) {
        this.board[y][x] = value;
        return this;
    }

    fill(size, func = ({x, y}) => 0) {
        for(let y=0;y<size;y++) {
            for(let x=0;x<size;x++) {
                this.setValue({y, x, v: func({x, y})});
            }
        }
        return this;
    }

    getCoord(x, y) { return wrapArray(wrapArray(this.board, y), x); }
    isAlive({x ,y}) {
        const wasAlive = this.getCoord(x, y);
        const aliveNeigbours = this.getSquare({x, y}).reduce(((sum, cell) => sum + cell), 0);
        return wasAlive ? (
            aliveNeigbours == 2 ? true :
            aliveNeigbours == 3 ? true : false
        ) : (
            aliveNeigbours == 3 ? true : false
        ) ;

    }

    getSquare({x, y}) {
        return [
            this.getCoord(y-1, x-1), this.getCoord(y-1, x), this.getCoord(y-1, x+1),
            this.getCoord(y,   x-1), this.getCoord(y,   x), this.getCoord(y,   x+1),
            this.getCoord(y+1, x-1), this.getCoord(y+1, x), this.getCoord(y+1, x+1),
        ];
    }
    next() {
        const board = [], size = this.size;
         for(let y=0;y<size;y++) {
            board[y] = [];
            for(let x=0;x<size;x++) {
                board[y][x] = this.isAlive({x, y});
            }
        }
        this.board = board;
    }

};


