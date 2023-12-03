const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readDir = promisify(fs.readdir);

/**
 * With specified directory (e.g. 'day-1'), locates index.js file with first valid function 
 * and runs it.
 * @param {string} directoryPath 
 * @returns 
 */
async function execSolution(directoryPath) {
    const absPath = path.resolve(directoryPath);
    let solution;

    try {
        const files = await readDir(absPath);
        if (!files?.length) {
            throw new Error(`No files found in ${absPath}`);
        }

        const indexFile = files.find(f => f === 'index.js');
        if (!indexFile) {
            throw new Error(`Could not find solution for ${directoryPath}`);
        }

        const indexPath = path.join(absPath, indexFile);
        const indexModule = require(indexPath);
        if (indexModule === null) {
            throw new Error(`Could not find valid solution in ${directoryPath}/${indexFile}`);
        }

        if (typeof indexModule === 'function') {
            solution = indexModule;
        }

        if (typeof indexModule === 'object') {
            const fn = Object.values(indexModule).find(f => typeof f === 'function');
            if (!fn || typeof fn !== 'function') {
                throw new Error('No functions found in the index.js file.');
            }
            solution = fn;
        }

        if (solution) {
            console.log(`Running solution for ${absPath} : ${solution.name}`);
            await solution();
            return;
        }

        throw new Error(`Could not find valid solution in ${absPath}`);
    }
    catch (err) {
        console.error('Error importing and running index.js file:', e);
    }
}

module.exports = execSolution;
