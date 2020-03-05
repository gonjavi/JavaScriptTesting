const capitalize = require('./index');
const reverseString = require('./reverse');
const calculator = require('./calculator')

test('Capitalize string', () => {
  expect(capitalize('string')).toBe('String');
});

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Calculator addition test', () => {
  expect(calculator.sum(4, 3)).toBe(7);
});

test('Calculator subtraction test', () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test('Calculator multiplication test', () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});

test('Calculator multiplication test', () => {
  expect(calculator.divide(10, 2 )).toBe(5);
});