var rupee = 100;
var dollar = 0;
var exchangeRate = 0.00454;

function currencyExchange(currency, rate) {
  return currency * rate;
}
dollar = currencyExchange(rupee, exchangeRate);
console.log(dollar);
