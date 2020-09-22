/* eslint-disable no-dupe-else-if */
/* eslint-disable no-mixed-operators */
/* eslint-disable line-comment-position */
/* eslint-disable no-inline-comments */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable max-depth */
/* eslint-disable no-empty */
/* eslint-disable id-length */
/* eslint-disable no-plusplus */
/* eslint-disable no-magic-numbers */
/* eslint-disable eqeqeq */
/* eslint-disable max-statements */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
/* eslint-disable one-var */
/* eslint-disable require-jsdoc */
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

        if (this.life == 0) {

            return ".";

        }

        return "*";


    }

    getNeighbors () {

        return this.neighbors;

    }

}

const numX = 4,
    numY = 8;
let arrayCells = "",
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

    const resultGame = initGame();

    console.log(resultGame);
    iteration(arrayCells);
    const showRes = showResult(newArray);

    console.log(showRes);

}

function initGame () {

    // Let arrayCells;
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

    /*
     * Console.log(resutArrayCell);
     * iteration(arrayCells);
     */
    return resutArrayCell;

}

function iteration (ParamarrayCells) {

    for (let x = 0; x < ParamarrayCells.length; x++) {

        for (let y = 0; y < ParamarrayCells[x].length; y++) {

            let neighbors = 0;

            for (let i = -1; i <= 1; i++) {

                for (let j = -1; j <= 1; j++) {

                    try {

                        if (ParamarrayCells[x + i][y + j].getLife() == 1) {

                            if (ParamarrayCells[x][y].getLife() == 1 && i == 0 && j == 0) {
                                // Console.log('se conto solo');
                            } else {

                                neighbors++;

                            }

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

    // Console.log("vecinos=" + neighbors + "   fila" + x + "  columna=" + y)
    if (cell.getLife() == 1 && cell.getNeighbors() < 2) {

        newArray[x][y].setLife(0); // Soledad

    } else if (cell.getLife() == 1 && cell.getNeighbors() == 2 || cell.getNeighbors() == 3) {

        newArray[x][y].setLife(1);

    } else if (cell.getLife() == 1 && cell.getNeighbors() > 3) {

        newArray[x][y].setLife(0); // Sobrepoblación

    } else if (cell.getLife() == 0 && cell.getNeighbors() == 3) {

        newArray[x][y].setLife(1); // Reproducción

    } else {

        newArray[x][y] = cell;

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
    // Console.log(resutNewArray);

}


// module.exports = {

//     getArrayCell,
//     getNewArray,
//     getNumX,
//     getNumY,
//     initGame,
//     iteration,
//     rulesLife,
//     showResult

// };

