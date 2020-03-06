function analyzeArray(array) {
  let average = 0;
  let min1 = 200;
  let max1 = -200;
  let length = 0;
  length = array.length;
  let x = 0;

  array.forEach((element) => {
    x += element;
    if (max1 < element) {
      max1 = element;
    }
    if (min1 > element) {
      min1 = element;
    }
  });

  average = (x / array.length);
  const min = min1;
  const max = max1;

  const obj = {
    average,
    min,
    max,
    length,
  };
  return obj;
}

module.exports = analyzeArray;