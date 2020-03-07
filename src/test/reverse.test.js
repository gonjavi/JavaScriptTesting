const reverseString = require('../reverse');

test('Reverse string pass', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse string fails', () => {
  expect(reverseString('string')).not.toBe('string');
});