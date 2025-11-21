const { sumArray, findMax } = require('../src/arrayTools');

test("Обчислення суми та пошук максимального значення", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(findMax([10, 2, 8])).toBe(10);
});
