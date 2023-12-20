const readInputLines = require('./read-input-lines');

module.exports = async function (pathName, cb) {
    const solutionName = pathName.replace('-', ' ');
    try {
        readInputLines(pathName).then(content => {
            const result = cb(content);
            if (result) {
                console.log(`The answer to ${solutionName} is :::: ${result}`);
                return;
            }
            console.error(`I didn't get a result for ${solutionName}`);
        });
    }
    catch (err) {
        throw new Error(`Error executing the ${solutionName} solution`, err);
    }
}