const capitalize = require('./index');

test('Capitalize first string passes ', () => {
  expect(capitalize('string')).toBe('String');
});
test('Capitalize first string fails', () => {
  expect(capitalize('string')).not.toBe('string');
});
