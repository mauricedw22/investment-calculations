
function CAGR(end, start, t) {

    let growth = (end/start)**(1/t);
    growth -= 1;
    let CAGR = growth.toFixed(2);
    return Number(CAGR);

}

module.exports = CAGR