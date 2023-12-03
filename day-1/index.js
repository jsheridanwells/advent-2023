const readInputLines = require('../util/read-input-lines');
const runDayOne = require('./run-day-1');

const solutionName = 'Date One';

async function main() {
    try {
        readInputLines('day-1').then(input => {
            const result = runDayOne(input);
            if (result) {
                console.log(`The answer to ${solutionName} is :::: ${result}`);
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day One solution', err);
    }
}

module.exports = main;