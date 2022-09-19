const sort = require('./sort');

test('sorts an array of numbers', () => {
    expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
});