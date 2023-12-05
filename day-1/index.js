const readInputLines = require('../util/read-input-lines');
const runDayOne = require('./run-day-1');
const runDayOnePartTwo = require('./run-day-1-part-2');

const solutionName = 'Day One';

async function main() {
    try {
        readInputLines('day-1').then(input => {
            const resultOne = runDayOne(input);
            const resultTwo = runDayOnePartTwo(input);
            if (resultOne) {
                console.log(`The answer to ${solutionName} #1 is :::: ${resultOne}`);
            }
            if (resultTwo) {
                console.log(`The answer to ${solutionName} #2 is :::: ${resultTwo}`);
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day One solution', err);
    }
}

module.exports = main;