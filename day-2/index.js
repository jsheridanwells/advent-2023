const readInputLines = require('../util/read-input-lines');
const runDayTwo = require('./run-day-2');

const solutionName = 'Day Two';

async function main() {
    try {
        readInputLines('day-2').then(input => {
            const result = runDayTwo(input);
            if (result) {
                console.log(`The answer to ${solutionName} is :::: ${result}`);
                return;
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day Two solution', err);
    }
}

module.exports = main;