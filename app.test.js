
const game = require('./app');


/*
 *  Test('Las filas es igual a 4', () => {
 *    expect(game.getNumX()).toBe(4);
 *  });
 */


test('Las columnas es igual a 8', () => {
    expect(game.getNumY()).toBe(8);
});



/*
 *  Test('Se completo el juego correctamente', () => {
 *    let arrayCell = game.getArrayCell();
 *    let newArray = game.getNewArray();
 *    expect(arrayCell).toBe(newArray);
 *  });
 */

