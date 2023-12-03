const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

/**
 * Returns the contents of an AoC input.txt file 
 * as an array of strings
 * @param {string} pathName 
 * @returns {Promise<string>}
 */
async function getInputs(pathName) {
    const absPath = path.resolve(pathName, 'input.txt');
    const fileContent = await readFile(absPath, 'utf8');
    const inputs = fileContent.split(/\r?\n/);
    return inputs; 
}

module.exports = getInputs;