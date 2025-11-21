const { capitalize } = require("../src/stringTools");
const { findMax } = require("../src/arrayTools");

test("Інтеграція stringTools + arrayTools", () => {
    const words = ["alpha", "beta", "gamma"];
    const capitalized = words.map(capitalize);

    // визначаємо довжину найдовшого слова
    const lengths = capitalized.map(w => w.length);

    expect(findMax(lengths)).toBe(5);  // Gamma — 5 букв
});
