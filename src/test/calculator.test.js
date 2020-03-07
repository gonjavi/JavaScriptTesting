const calculator = require('../calculator');

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