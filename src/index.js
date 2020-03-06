const analyzeArray = require('./array');

function capitalize(string) {
  let f = '';
  f = string.charAt(0).toUpperCase();
  string = string.split('');
  string.splice(0, 1, f);
  return string.join('');
}

analyzeArray([1, 8, 3, 4, 2, 6]);


module.exports = capitalize;