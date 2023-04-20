const { generateText } = require('../util.js');

test('test positivo 1', () => {
    const text = generateText('Daniel', 30);
    expect(text).toBe('Daniel (30 years old)');
});