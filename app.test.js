const game = require('./app');

describe('Life Games', () => {

    test("Column = 8", () => {
        expect(game.getNumY()).toBe(8);
    });

    test("You should return \.\ if a value is 0 and \*\ if a value is 1 ", () => {

        expect(game.getCell(0)).toBe(".");
        expect(game.getCell(1)).toBe("*");


    });

    test("The game is complete", () => {
        let arrayCell = game.getArrayCell();
        let newArray = game.getNewArray();
        expect(arrayCell).toBe(newArray);
    });

    describe('Rules', () => {

        test("Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.", () => {

            expect(game.rulesLifes(1, 1)).toBe(0);
        });

        test("Any live cell with more than three live neighbours dies, as if by overcrowding.", () => {

            expect(game.rulesLifes(1, 4)).toBe(0);
        });

    });
});




