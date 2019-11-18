mocha.setup('bdd');

describe('pop', () => {
    it('[1,2,3].pop() == 3', () => {
        chai.assert.equal([1,2,3].pop(), _pop([1,2,3]));
    });
});


mocha.run();