const capitalize = require('./index');

test('capitalize string', () => {
  expect(capitalize('string')).toBe('String');
});

