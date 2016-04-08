const wrapArray = (arr, i) => arr[i] != undefined ? arr[i] : (i > 0 ? arr[i-arr.length] : arr[arr.length + i]);

export default class Life {
    constructor({size = 10, func = ({x, y}) => 0}) {
        this.fill({size, func})
    }
    textMode() {
        console.log(this.board.map((row) => row.map((col) => col ? '@' : '#' ).join('')).join('\n'));
    }
    setValue({x, y, value}) {
        (!this.board) && (this.board = []);
        (!this.board[y]) && (this.board[y] = []);
        this.board[y][x] = value?1:0;
        return this;
    }

    fill({size = this.size, func = ({x, y}) => 0}) {
        this.size = size;
        for(let y=0;y<size;y++) {
            for(let x=0;x<size;x++) {
                this.setValue({y, x, value: func({x, y}) ? 1 : 0});
            }
        }
        return this;
    }

    getCoord({y, x}) { return wrapArray(wrapArray(this.board, y), x); }
    isAlive({x ,y}) {
        const wasAlive = this.getCoord({y, x});
        const aliveNeigbours = this.getSquare({x, y}).reduce(((sum, cell) => sum + (cell?1:0)), 0);
        return wasAlive ? (
            aliveNeigbours == 2 ? 1 :
            aliveNeigbours == 3 ? 1 : 0
        ) : (
            aliveNeigbours == 3 ? 1 : 0
        ) ;

    }

    getSquare({x, y}) {
        return [
            this.getCoord({ y: y-1, x: x-1 }), this.getCoord({ y: y-1, x: x }), this.getCoord({ y: y-1, x: x+1 }),
            this.getCoord({ y: y,   x: x-1 }), 0/*self dont co un t*/         , this.getCoord({ y: y,   x: x+1 }),
            this.getCoord({ y: y+1, x: x-1 }), this.getCoord({ y: y+1, x: x }), this.getCoord({ y: y+1, x: x+1 }),
        ];
    }
    next() {
        const board = [], size = this.size;
        for(let y=0;y<size;y++) {
            !board[y] && (board[y] = []);
            for(let x=0;x<size;x++) {
                board[y][x] = this.isAlive({x, y});
            }
        }
        this.board = board;
        return this;
    }

};


