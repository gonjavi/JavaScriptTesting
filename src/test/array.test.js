const analyzeArray = require('../array');

test('Array analysis test pass', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Array analysis test fail', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).not.toBe({
    average: 1,
    min: 4,
    max: 6,
    length: 8,
  });
});