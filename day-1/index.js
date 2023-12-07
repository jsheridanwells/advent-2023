const readInputLines = require('../util/read-input-lines');
const runDayOne = require('./run-day-1');

const solutionName = 'Day One';

async function main() {
    try {
        readInputLines('day-1').then(input => {
            const resultOne = runDayOne(input);
            if (resultOne) {
                console.log(`The answer to ${solutionName} #1 is :::: ${resultOne}`);
                return;
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day One solution', err);
    }
}

module.exports = main;