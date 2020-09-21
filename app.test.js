const game = require('./game');

test('La suma es correcta', () => {
    expect(game.sumTd(1, 2)).toBe(3);
});

test('Las filas es igual a 4', () => {
    expect(game.getNumX()).toBe(4);
});

test('Las columnas es igual a 8', () => {
    expect(game.getNumY()).toBe(8);
});

test('Se completo el juego correctamente', () => {
    let arrayCell = game.getArrayCell();
    let newArray = game.getNewArray();
    expect(arrayCell).toBe(newArray);
});