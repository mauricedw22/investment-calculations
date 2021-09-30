const { it, expect } = require('@jest/globals');
const netPresentValue = require('./netPresentValue');

it('calculates net present value', () => {

    expect(netPresentValue(10000,0.1,2,7500)).toBe(9855.37);

});