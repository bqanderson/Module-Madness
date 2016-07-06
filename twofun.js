var money = require('./usd.js');
var newBalance = money.currency();

module.exports = {
  finalBalance : newBalance,
  text : 'Account balance: \n'
}
