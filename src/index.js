const calculator = require('./calculator')

function capitalize(string) {
  let f= '' ;
  f = string.charAt(0).toUpperCase();
  string = string.split('');
  string.splice(0,1,f);
  return string.join("");
}

console.log(calculator.sum(4,5));
module.exports = capitalize;