var amount = require('./random.js');

var randomAmount = amount.randomNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

module.exports = {
  currency : randomAmount
}
