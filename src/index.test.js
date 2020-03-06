const capitalize = require('./index');
const reverseString = require('./reverse');
const calculator = require('./calculator');
const caesar = require('./caesar');

test('Capitalize first string passes ', () => {
  expect(capitalize('string')).toBe('String');
});
test('Capitalize first string fails', () => {
  expect(capitalize('string')).not.toMatch(/string/);
});

test('Reverse string pass', () => {
  expect(reverseString('string')).toMatch(/gnirts/);
});

test('Reverse string fails', () => {
  expect(reverseString('string')).not.toMatch(/string/);
});

test('Calculator addition test passes', () => {
  expect(calculator.sum(4, 3)).toBe(7);
});

// Calculator tests
test('Calculator addition test fails', () => {
  expect(calculator.sum(4, 3)).not.toBe(!7);
});


test('Calculator subtraction test passes', () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test('Calculator subtraction test fails', () => {
  expect(calculator.subtract(4, 3)).not.toBe(!1);
});

test('Calculator multiplication test passes', () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test('Calculator multiplication test fails', () => {
  expect(calculator.multiply(4, 4)).not.toBe(!16);
});

test('Calculator multiplication test passes', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('Calculator multiplication test fails', () => {
  expect(calculator.divide(10, 2)).not.toBe(!5);
});

// Caesar Cipher tests
test('Caesar test passes', () => {
  expect(caesar('stringz', 3)).toMatch(/vwulqjc/);
});

test('Caesar test fails', () => {
  expect(caesar('stringz', 3)).not.toMatch(/vwulqjp/);
});

test('Caesar test with space passes', () => {
  expect(caesar('the house ', 4)).toMatch(/xli lsywi /);
});

test('Caesar test with space fails', () => {
  expect(caesar('the house', 4)).not.toMatch(/xlilsywi/);
});

test('Caesar punctuation test passes', () => {
  expect(caesar(',.;:', 10)).toMatch(/,.;:/);
});
