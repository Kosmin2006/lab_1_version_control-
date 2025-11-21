function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}

module.exports = { sumArray, findMax };
