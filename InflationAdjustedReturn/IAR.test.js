const IAR = require('./IAR');

it('should calculate inflation-adjusted return', () => {

    expect(IAR(3,1)).toBe(100.00);

})