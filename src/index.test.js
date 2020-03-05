const capitalize = require('./index');
const reverseString = require('./reverse');
const calculator = require('./calculator')

test('Capitalize first string pass ', () => {
  expect(capitalize('string')).toBe('String');
});
test('Capitalize first string fail', () => {
  expect(capitalize('string')).not.toBe('string');
});

test('Reverse string pass', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse string fail', () => {
  expect(reverseString('string')).not.toBe('string');
});

test('Calculator addition test pass', () => {
  expect(calculator.sum(4, 3)).toBe(7);
});

test('Calculator addition test fail', () => {
  expect(calculator.sum(4, 3)).not.toBe(!7);
});


test('Calculator subtraction test pass', () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test('Calculator subtraction test fail', () => {
  expect(calculator.subtract(4, 3)).not.toBe(!1);
});

test('Calculator multiplication test pass', () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test('Calculator multiplication test fail', () => {
  expect(calculator.multiply(4, 4)).not.toBe(!16);
});

test('Calculator multiplication test pass', () => {
  expect(calculator.divide(10, 2 )).toBe(5);
});

test('Calculator multiplication test fail', () => {
  expect(calculator.divide(10, 2 )).not.toBe(!5);
});