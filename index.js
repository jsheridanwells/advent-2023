const { parseArgs, execSolution } = require('./util');
const args = process.argv;

async function run() {
    const solution = parseArgs(args);
    await execSolution(solution);
}

run();
