const capitalize = require('./index');
const reverseString = require('./reverse');

test('Capitalize string', () => {
  expect(capitalize('string')).toBe('String');
});

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

