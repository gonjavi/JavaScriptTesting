function caesar(word, keyNumber) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const encipher = [];
  let decipher = [];

  word = word.split('');

  word.forEach((element) => {
    alphabet.forEach((item, ind) => {
      if (element === item) {
        encipher.push(ind + keyNumber);
      } else if (element === '.' || element === ',' || element === ';' || element === ':') {
        encipher.push(element);
      }
    });
  });

  encipher.forEach((element) => {
    alphabet2.forEach((item, ind) => {
      if (element === ind) {
        decipher.push(item);
      } else if (element === '.' || element === ',' || element === ';' || element === ':') {
        decipher.push(item);
      }
    });
  });
  decipher = decipher.join('');
  return decipher;
}

module.exports = caesar;