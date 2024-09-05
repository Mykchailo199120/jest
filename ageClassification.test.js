const ageClassification = require('task/ageClassification');
const test = require("node:test");

test('null', () => {
expect(ageClassification(-1)).toBeNull();
expect(ageClassification(0)).toBeNull();
});

test('від 0 до 24 Дитинство', () => {
    expect(ageClassification(1)).toBe();
    expect(ageClassification(24)).toBe();
});

test('від 25 до 44', () => {
    expect(ageClassification(24.01)).toBe();
    expect(ageClassification(44)).toBe();
});

test('від 45 до 65 Зрілість', () => {
    expect(ageClassification(44.01)).toBe();
    expect(ageClassification(65)).toBe();
});
test('від 66 до 75 Старість', () => {
    expect(ageClassification(65.01)).toBe();
    expect(ageClassification(75)).toBe();
});

test('від 76 до 90 Довголіття', () => {
    expect(ageClassification(75.01)).toBe();
    expect(ageClassification(90)).toBe();
});

test('Рекорд', () => {
    expect(ageClassification(90.01)).toBe();
    expect(ageClassification(122)).toBe();
});

test('null', () => {
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
})