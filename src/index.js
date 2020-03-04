function capitalize(string) {
  let f= '' ;
  f = string.charAt(0).toUpperCase();
  string = string.split('');
  string.splice(0,1,f);
  return string.join("");
}
 
function reverseString(string) {

}
module.exports = capitalize, reverseString;