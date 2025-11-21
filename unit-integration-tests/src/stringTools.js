function capitalize(word) {
    if (!word) return '';
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseText(text) {
    return text.split('').reverse().join('');
}

module.exports = { capitalize, reverseText };
