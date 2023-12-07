const runDay2 = require('./run-day-2');
const possibleGames = [
    'Game 1: 7 green, 4 blue, 3 red; 4 blue, 10 red, 1 green; 1 blue, 9 red',
    'Game 3: 4 green, 3 blue, 1 red; 4 blue, 11 red, 1 green; 1 blue, 9 red; 13 blue, 9 red',
    'Game 16: 4 green, 3 blue, 1 red; 4 blue, 11 red, 1 green; 1 blue, 9 red; 13 blue, 9 red; 13 green, 14 blue, 12 red'
];
const impossibleGames = [
    'Game 2: 8 red, 16 green; 10 green, 1 blue; 16 green, 7 blue, 3 red; 13 red, 7 blue, 8 green; 4 red, 2 green, 8 blue',
    'Game 10: 8 red, 4 green; 10 green, 1 blue; 4 green, 15 blue, 3 red; 13 red, 7 blue, 8 green; 4 red, 2 green, 8 blue',
    'Game 20: 8 red, 16 green; 10 green, 1 blue; 16 green, 7 blue, 3 red; 13 red, 7 blue, 8 green; 13 red',
];

test('finds ID of one possible game', () => {
    const expectedResult = 1;
    const games = [possibleGames[0]];
    const result = runDay2(games);
    expect(result).toBe(expectedResult);
});

test('finds ID of one possible o/o two games', () => { 
    const expectedResult = 1;
    const games = [possibleGames[0], impossibleGames[0]];
    const result = runDay2(games);
    expect(result).toBe(expectedResult);
});

test('find total IDs of two possible o/o five games', () => {
    const expectedResult = 20;
    const games = [...possibleGames, ...impossibleGames]
    const result = runDay2(games);
    expect(result).toBe(expectedResult);
 });

test('returns 0 if no possible games', () => { 
    const expectedResult = 0;
    const games = impossibleGames;
    const result = runDay2(games);
    expect(result).toBe(expectedResult);
});

test('returns 0 if input is unexpected format', () => {
    const emptyString = [''];
    const noSemiColon = ['Game 1 7 red'];
    const noGameSets = ['Game 1: taco tuesday"'];
    const expectedResult = 0;
    const emptyStringResult = runDay2(emptyString);
    expect(emptyStringResult).toBe(expectedResult);
    const noSemiColonResult = runDay2(noSemiColon);
    expect(noSemiColonResult).toBe(expectedResult);
    const noGameSetsResult = runDay2(noGameSets);
    expect(noGameSetsResult).toBe(expectedResult);

})

