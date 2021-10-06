
function ROI(gross, exp, inv) {

    let net = gross - exp;
    let ROI = (net/inv).toFixed(2);
    return Number(ROI);

}

module.exports = ROI