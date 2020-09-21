class cell {

    constructor(life, neighbors) {
        this.life = life;
        this.neighbors = neighbors;
    }

    // CONDICIONES PARA LA CELULA
    // 1 = VIVO    0 = MUERTO

    getLife() {
        return this.life;
    }

    setLife(life) {
        this.life = life;
    }

    setNeighbors(Neighbors) {
        this.neighbors = Neighbors;
    }

    getNumCell() {
        if (this.life == 0) {
            return '.';
        } else {
            return '*';
        }
    }

    getNeighbors() {
        return this.neighbors;
    }


};

let numX = 4, numY = 8;
var resutArrayCell = '';
var resutNewArray = '';
var cell;
let arrayCells;
let loopControler=0;

function initGame(){
    //let arrayCells;
    resutArrayCell = '';
    //numX = parseInt(prompt('Ingrese el numero de filas: '));
    //numY = parseInt(prompt('Ingrese el numero de columnas: '));
    arrayCells = new Array(numX);
    let i = 0;
    while(i < arrayCells.length){

    }
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(numY);
    }

    for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
            var randomvar = Math.random();
            if (randomvar >= 0.5) {
                cell = new celula(0, 0);
                arrayCells[x][y] = cell;
            } else {
                cell = new celula(1, 0);
                arrayCells[x][y] = cell;
            }
            resutArrayCell+= arrayCells[x][y].getNumCell();
        }
        resutArrayCell += '\n';
    }
    newArray=arrayCells;
    //console.log(resutArrayCell);
    //iteration(arrayCells);
    return resutArrayCell;
}



function sum(a, b) {
    return a + b;
}

module.exports = sum;