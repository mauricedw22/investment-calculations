const CAGR = require('./CAGR');

it('should calculate CAGR', () => {

    expect(CAGR(10000,1000,2)).toBe(2.16);

});