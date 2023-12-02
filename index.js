const { parseArgs, execSolution } = require('./util');
const args = process.argv;

function run() {
    const solution = parseArgs(args);
    execSolution(solution);
}

run();
