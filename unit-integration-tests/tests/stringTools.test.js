const { capitalize, reverseText } = require('../src/stringTools');

test("Коректне капіталізування тексту", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("World");
});

test("Реверсування тексту працює правильно", () => {
    expect(reverseText("abc")).toBe("cba");
    expect(reverseText("level")).toBe("level");
});
