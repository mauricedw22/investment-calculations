
function IAR(ret, rate) {

    let calc = (((1 + ret)/(1 + rate)) - 1) * 100;
    let IAR = calc.toFixed(2);
    return Number(IAR);

}

module.exports = IAR