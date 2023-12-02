const noSolutionMessage = 'Please include the name of the solution, e.g. npm start day-1';
const incorrectSolutionNameMessage = 'Please specify a solution name beginning with day-*';

function isCorrectSolutionName(name) {
    return !!(name.match(/day-1/));
}

function parseArgs(inputArgs) {
    if (!inputArgs || inputArgs.length < 3) {
        throw new Error(noSolutionMessage);
    }
    if (!isCorrectSolutionName(inputArgs[2])) {
        throw new Error(incorrectSolutionNameMessage);
    }
    return inputArgs[2];
}

module.exports = {
    noSolutionMessage,
    incorrectSolutionNameMessage,
    parseArgs
};