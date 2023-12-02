const { noSolutionMessage, incorrectSolutionNameMessage, parseArgs } = require('./parse-args');
let testArgs = [];

beforeEach(() => {
    testArgs = ['1', '2'];
});

test('returns test name', () => {
    const testName = 'day-1';
    testArgs.push(testName);
    const result = parseArgs(testArgs);
    expect(result).toBe(testName);
});

test('throws not found error with helpful message', () => {
    expect(() => {
        parseArgs(testArgs);
    }).toThrow(noSolutionMessage);
});

test('throws error if test name not day-*', () => {
    testArgs.push('taco');
    expect(() => {
        parseArgs(testArgs);
    }).toThrow(incorrectSolutionNameMessage);
});