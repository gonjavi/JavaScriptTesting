const caesar = require('./caesar');

function capitalize(string) {
  let f = '';
  f = string.charAt(0).toUpperCase();
  string = string.split('');
  string.splice(0, 1, f);
  return string.join('');
}
(caesar('z  z', 2));

module.exports = capitalize;