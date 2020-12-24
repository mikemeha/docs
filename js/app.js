function calcMaxDeposit(input) {

    const maxPercent = 0.06;
    const maxAmount = input * maxPercent;

    return maxAmount;
}

const result = calcMaxDeposit (10000);

console.log(result);

