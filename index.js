const { parseArgs, execSolution } = require('./util');
const args = process.argv;

async function run() {
    const solution = parseArgs(args);
    const result = await execSolution(solution);

}

run();
