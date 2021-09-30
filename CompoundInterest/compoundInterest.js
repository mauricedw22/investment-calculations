
function compoundInterest(principal, rate, frequency, time) {
    let intCalc = (1 + (rate/frequency))**(frequency*time);
    let a = (principal * intCalc).toFixed(2);
    return Number(a); 
}

module.exports = compoundInterest;