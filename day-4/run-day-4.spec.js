const runDay4 = require('./run-day-4');

test('calculates one match', () => {
    const testInput = ['Card 3: 21 32 43 | 32 12 34'];
    const expectedResult = 1;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
});

test('calculates two matches', () => {
    const testInput = ['Card 3: 56 67 78 | 67 65 56'];
    const expectedResult = 2;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
});

test('calculates five matches', () => {
    const testInput = ['Card 3: 56 67 78 89 10 21 32 | 78 98 56 10 23 21 89'];
    const expectedResult = 16;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
});

test('calculates three matches in three rows', () => {
    const testInput = [
        'Card 1: 21 23 | 23 67',
        'Card 2: 32 34 | 32 89',
        'Card 3: 43 45 | 45 23',
    ];
    const expectedResult = 3;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
});

test('calculates zero matches', () => {
    const testInput = [
        'Card 1: 21 23 | 32 67',
        'Card 2: 32 34 | 23 89',
        'Card 3: 43 45 | 67 23',
    ];
    const expectedResult = 0;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
 });

test('solves example problem', () => {
    const testInput = [
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
    ];
    const expectedResult = 13;
    const result = runDay4(testInput);
    expect(result).toBe(expectedResult);
})
