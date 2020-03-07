const caesar = require('../caesar');

test('Caesar test passes', () => {
  expect(caesar('stringz', 3)).toBe('vwulqjc');
});

test('Caesar test fails', () => {
  expect(caesar('stringz', 3)).not.toBe('vwulqjp');
});

test('Caesar test with space passes', () => {
  expect(caesar('the house ', 4)).toBe('xli lsywi ');
});

test('Caesar test with space fails', () => {
  expect(caesar('the house', 4)).not.toBe('xlilsywi');
});

test('Caesar punctuation test passes', () => {
  expect(caesar(',.;:', 10)).toMatch(/,.;:/);
});