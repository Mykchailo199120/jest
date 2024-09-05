const weekFn = require('./task/weekFn');
const test = require("node:test");

test('returns correct day names for numbers 1 to 7', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe("П'ятниця");
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
});

test('returns null for numbers out of range or invalid input', () => {
    expect(weekFn(0)).toBeNull();
    expect(weekFn(8)).toBeNull();
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
    expect(weekFn(-1)).toBeNull();
});