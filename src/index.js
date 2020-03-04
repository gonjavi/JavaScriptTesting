function capitalize(string) {
  let f= '' ;
  f = string.charAt(0).toUpperCase();
  string = string.split('');
  string.splice(0,1,f);
  return string.join("");
}
 
module.exports = capitalize;