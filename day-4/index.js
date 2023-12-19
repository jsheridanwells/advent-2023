
const readInputLines = require('../util/read-input-lines');
const runDay4 = require('./run-day-4');

const solutionName = 'Day Four';

async function main() {
    try {
        readInputLines('day-4').then(input => {
            const result = runDay4(input);
            if (result) {
                console.log(`The answer to ${solutionName} is :::: ${result}`);
                return;
            }
            console.error(`I didn't get a result for ${solutionName}`);
        })
    }
    catch (err) {
        throw new Error('Error executing the Day Four solution', err);
    }
}

module.exports = main;