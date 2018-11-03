const {getSugarToBottling} = require('./bottling');

test('Verify getSugarToBottling', () => {
  expect(getSugarToBottling(2.2, 20, 19)).toBe(5.24);
  expect(getSugarToBottling(2.3, 20, 19)).toBeGreaterThan(5.6);
  expect(getSugarToBottling(2.3, 20, 19)).toBeLessThan(5.7);
});
