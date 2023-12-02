const fs = require('fs');
const path = require('path');

function execSolution(directoryPath) {
    const absPath = path.resolve(directoryPath);
    let solution;

    fs.readdir(absPath, (err, files) => {

        if (err) {
            throw new Error(err.message);
        }

        const indexFile = files.find(file => file === 'index.js');

        if (!indexFile) {
            throw new Error(`Could not find solution for ${directoryPath}`);
        }

        const indexPath = path.join(absPath, indexFile);

        try {
            const indexModule = require(indexPath);

            if (indexModule === null) {
                throw new Error(`Could not find valid solution in ${directoryPath}/${indexFile}`);
            }

            if (typeof indexModule === 'function') {
                solution = indexModule;
            }

            if (typeof indexModule === 'object') {
                const fn = Object.values(indexModule).find(f => typeof f === 'function');
                if ( !fn || typeof fn !== 'function') {
                    throw new Error('No functions found in the index.js file.');
                }
                solution = fn;
            }

            if (solution) {
                console.log(`Running solution for ${absPath} : ${solution.name}`);
                solution();
                return;
            }

            throw new Error(`Could not find valid solution in ${absPath}`);

        } catch (e) {
            console.error('Error importing and running index.js file:', e);
        }
    });
}

module.exports = execSolution;
