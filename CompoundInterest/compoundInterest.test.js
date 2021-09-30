const { expect } = require('@jest/globals');
const compoundInterest = require('./compoundInterest');

it('calculates compound interest', () => {

    expect(compoundInterest(1000,0.1,12,1)).toBe(1104.71);

});