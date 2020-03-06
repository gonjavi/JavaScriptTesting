function caesar(word, keyNumber) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const encipher = [];
  let decipher = [];
  let x = 0;
  let y = 0;
  let w = 0;
  let z = 0;
  word = word.split('');

  word.forEach((element, index) => {
    alphabet.forEach((item, ind) => {
      if (element === item) {
        encipher.push(ind + keyNumber);
      } else if (index < word.length && (element === '.' || element === ',' || element === ';' || element === ':')) {
        if (x < 1) {
          encipher.push(element);
          x = 2;
        }
      } else if (index < word.length && element === ' ') {
        if (w < 1) {
          encipher.push(element);
          w = 1;
        }
      }
    });
    x = 0;
    w = 0;
  });

  console.log(encipher);
  encipher.forEach((element, index) => {
    alphabet2.forEach((item, ind) => {
      if (index < word.length && element === ind) {
        decipher.push(item);
      } else if (index < word.length && (element === '.' || element === ',' || element === ';' || element === ':')) {
        if (y < 1) {
          decipher.push(element);
          y = 2;
        }
      } else if (index < word.length && element === ' ') {
        if (z < 1) {
          decipher.push(' ');
          z = 2;
        }
      }
    });
    y = 0;
    z = 0;
  });
  decipher = decipher.join('');
  console.log(decipher);
  return decipher;
}

module.exports = caesar;