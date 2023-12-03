const { exportAllDeclaration } = require('@babel/types');
const runDayOne = require('./run-day-1');

test('throws invalid input error', () => {
    expect(() => {
        runDayOne([]);
    }).toThrow('Invalid input');
})

test('returns correct sum from number', () => {
    const input = ['42'];
    const result = runDayOne(input);
    expect(result).toBe(42);
});

test('returns correct sum from two numbers', () => {
    const input = ['42', '666'];
    const result = runDayOne(input);
    expect(result).toBe(42 + 66);
});

test('parses one digit as number with double digits', () => {
    const input = ['7'];
    const result = runDayOne(input);
    expect(result).toBe(77);
});

test('returns correct sum from digits and text', () => {
    const input = ['4blah2', '62blah6'];
    const result = runDayOne(input);
    expect(result).toBe(42 + 66);
});

test('returns correct sum from multiple lines of digits and characters', () => {
    const input = [
        'dqfournine5four2jmlqcgv', // 52
        '7ggzdnjxndfive', // 77
        'twofive4threenine', // 44
        'dttwonezbgmcseven5seven', // 55
        '5vsrcnine', // 55
        '95zzbjck' // 95
    ];
    const result = runDayOne(input);
    expect(result).toBe(
        52 + 77 + 44 + 55 + 55 + 95
    );
});
