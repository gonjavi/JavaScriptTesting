const capitalize = require('./index');
const reverseString = require('./index');

test('Capitalize string', () => {
  expect(capitalize('string')).toBe('String');
});

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

