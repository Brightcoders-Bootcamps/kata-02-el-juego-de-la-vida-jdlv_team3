
class Celula {

    constructor (life, neighbors) {
        this.life = life;
        this.neighbors = neighbors;
    }

    /*
     * CONDICIONES PARA LA CELULA
     * 1 = VIVO    0 = MUERTO
     */

    getLife () {
        return this.life;
    }

    setLife (life) {
        this.life = life;
    }

    setNeighbors (Neighbors) {
        this.neighbors = Neighbors;
    }

    getNumCell () {
        if (this.life === 0) {
            return ".";
        }
        return "*";
    }

    getNeighbors () {
        return this.neighbors;
    }

}

function getCell (cell) {
    if (cell === 0) {
        return ".";
    }
    return "*";
}

const numX = 4,
    numY = 8;
let arrayCells = [],
    cell = "",
    resutArrayCell = "",
    resutNewArray = "";

const getNumX = () => numX;

function getNumY () {
    return numY;
}

function getArrayCell () {
    return resutArrayCell;
}

function getNewArray () {
    return resutArrayCell;
}

play();

function play () {
    let resultGame = initGame();
    console.log(resultGame);
    iteration(arrayCells);
    let showRes = showResult(newArray);
    console.log(showRes);
}

function initGame () {
    resutArrayCell = "";
    arrayCells = new Array(numX);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(numY);
    }
    for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
            const randomvar = Math.random();
            if (randomvar >= 0.5) {
                cell = new Celula(
                    0,
                    0
                );
                arrayCells[x][y] = cell;
            } else {

                cell = new Celula(
                    1,
                    0
                );
                arrayCells[x][y] = cell;
            }
            resutArrayCell += arrayCells[x][y].getNumCell();
        }
        resutArrayCell += "\n";
    }
    newArray = arrayCells;
    iteration(arrayCells);
    return resutArrayCell;
}

function iteration (ParamarrayCells) {
    /*let arri = [-1, 0, 1];
    let arrj = [-1, 0, 1];
    let constX = 0, constY = 0;

    ParamarrayCells.forEach(function(x,indexX){
        x.forEach(function(y,indexY){
            let neighbors = 0;
            arri.forEach(function(i){
                arrj.forEach(function(j){
                    try {
                        if (y.getLife() == 1) {
                            if(y.getLife() == 1 && i == 0 && j == 0){

                            }else{
                                neighbors++;
                            }
                        }
                    } catch (e) {
                    }
                });
            });
            debugger;
            y.setNeighbors(neighbors);
            rulesLife(
                y,
                indexX,
                indexY
            );
        });
    });*/
    
    for (let x = 0; x < ParamarrayCells.length; x++) {
        for (let y = 0; y < ParamarrayCells[x].length; y++) {
            let neighbors = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    try {
                        
                        if (ParamarrayCells[x + i][y + j].getLife() == 1) {

                            ParamarrayCells[x][y].getLife() == 1 && i == 0 && j == 0 ? neighbors : neighbors++;
                            
                        }
                    } catch (e) {
                    }
                }
            }
            ParamarrayCells[x][y].setNeighbors(neighbors);
            rulesLife(
                ParamarrayCells[x][y],
                x,
                y
            );
        }
    }
}

function rulesLife (cell, x, y) {
    if (cell.getLife() === 1 && cell.getNeighbors() < 2) {
        newArray[x][y].setLife(0); // Soledad
    } else if (cell.getLife() === 1 && cell.getNeighbors() === 2 || cell.getNeighbors() === 3) {
        newArray[x][y].setLife(1);
    } else if (cell.getLife() === 1 && cell.getNeighbors() > 3) {
        newArray[x][y].setLife(0); // Sobrepoblación
    } else if (cell.getLife() === 0 && cell.getNeighbors() === 3) {
        newArray[x][y].setLife(1); // Reproducción
    }
}

function rulesLifes(cell, neighbors){
    if (cell == 1 && neighbors < 2) {
        return 0; // Soledad
    } else if (cell == 1 && neighbors == 2 || neighbors == 3) {
        return 1;
    } else if (cell == 1 && neighbors > 3) {
        return 0; // Sobrepoblación
    } else if (cell == 0 && neighbors == 3) {
        return 1; // Reproducción
    }
}

function showResult (array) {
    resutNewArray = "";
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resutNewArray += arrayCells[x][y].getNumCell();
        }
        resutNewArray += "\n";
    }
    return resutNewArray;
}


module.exports = {

    getArrayCell,
    getCell,
    getNewArray,
    getNumX,
    getNumY,
    initGame,
    iteration,
    rulesLife,
    rulesLifes,
    showResult

};

