
const readInputLines = require('../util/read-input-lines');
const runDayThree = require('./run-day-3');

const solutionName = 'Day Three';

async function main() {
    try {
        readInputLines('day-3').then(input => {
            const result = runDayThree(input);
            if (result) {
                console.log(`The answer to ${solutionName} is :::: ${result}`);
                return;
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day Three solution', err);
    }
}

module.exports = main;