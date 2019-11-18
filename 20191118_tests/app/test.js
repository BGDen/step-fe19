mocha.setup('bdd');

//
describe('Сумматор', () => {
    it('Сумма двух чисел: 1 + 1 = 2', () => {
        chai.assert.equal(sum(1, 1), 2);
    });
    it('Сумма отрицательного и положительного: 1 + (-8) = -7', () => {
        chai.assert.equal(sum(1, -8), -7);
    });
    it('Сумма трёх чисел: 1 + 5 + 8 = 14', () => {
        chai.assert.equal(sum(1, 5, 8), 14);
    });
    it('Сумма одного числа: 1 = 1', () => {
        chai.assert.equal(sum(1), 1);
    });
    it('Сумма без аргументов: = 0', () => {
        chai.assert.equal(sum(), 0);
    });
    it('Сумма четырёх аргументов: 5 + 2 + 1 + 2 = 10', () => {
        chai.assert.equal(sum(5, 2, 1, 2), 10);
    });
    it('Сумма строк: "5" + "2" = 7', () => {
        chai.assert.equal(sum("5", "2"), 7);
    });
    it('Сумма строк: "ф" + 2 = 2', () => {
        chai.assert.equal(sum("ф", 2), 2);
    });
});



















mocha.run();