const runDayOnePtTwo = require('./run-day-1-part-2');

// test('parses written word numbers', () => {
//     const input = [
//         'one', // 11
//         'two', // 22
//         'three' // 33
//     ];
//     const result = runDayOnePtTwo(input);
//     expect(result).toBe(11 + 22 + 33);
// });

// test('parses w/ two written word numbers', () => {
//     const input = [
//         'onetwo', // 12
//         'nineeight', // 98
//         'sixfour' // 64
//     ];
//     const result = runDayOnePtTwo(input);
//     expect(result).toBe(12 + 98 + 64);
// });

test('returns correct sum from multiple lines of digits and characters', () => {
    const input = [
        'dqfournine5four2jmlqcgv', // 42
        '7ggzdnjxndfive', // 75
        'twofive4threenine', // 29
        'dttwonezbgmcseven5seven', // 27
        '5vsrcnine', // 59
        '95zzbjck' // 95
    ];
    const result = runDayOnePtTwo(input);
    expect(result).toBe(
        42 + 75 + 29 + 27 + 59 + 95
    );
});
