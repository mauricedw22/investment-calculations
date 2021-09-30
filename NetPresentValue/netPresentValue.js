
function simpleNPV(cf, rate, time, init) {
    let cashFlow = 0;
    for(let i=time;i > 0;i--){
        let denom = (1 + rate)**i;
        cashFlow += (cf/denom);
    }
    let npv = (cashFlow - init).toFixed(2);
    return Number(npv);
}

module.exports = simpleNPV