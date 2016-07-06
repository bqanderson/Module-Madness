var amount = require('./random.js');

var randomAmount = amount.randomNum(100, 1000000);

function setUSD() {
    randomAmount = randomAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    return randomAmount;
}


module.exports = {
  currency : setUSD
}
