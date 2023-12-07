/**
 * Sets the maximum number of cubes specified in the challenge
 */
const defaultGameCalibration = {
    red: 12,
    green: 13,
    blue: 14
};

function isGameSetPossible(gameSet, gameCalibration) {
    if (!gameSet?.length) {
        return -1;
    }

    let isPossible = true;
    const gameSetSplit = gameSet.toLowerCase().split(':');

    if (gameSetSplit?.length < 2) {
        return -1;
    }

    const filteredSet = gameSetSplit[1].match(/(\d)|((?<!g)r|[gb])/g);
    if (!filteredSet) {
        return -1;
    }

    let holdCount = '';
    for (let i = 0; i < filteredSet.length; i++) {
        const char = filteredSet[i];
        let cubeColor = '';
        if (/\d/.test(char)) {
            holdCount += char;
            continue;
        }
        if (/[rgb]/g.test(char)) {
            switch (char) {
                case 'r':
                    cubeColor = 'red';
                    break;
                case 'b':
                    cubeColor = 'blue';
                    break;
                case 'g':
                    cubeColor = 'green';
                    break;
                default:
                    break;
            }
            isPossible = (+holdCount <= gameCalibration[cubeColor])
            if (!isPossible) {
                break;
            }
            holdCount = '', cubeColor = '';
        }
    }
    return isPossible ? +gameSetSplit[0].match(/\d/g).join('') : -1;
}


module.exports = function runDay2(input, gameCalibration = defaultGameCalibration) {
    try {
        if (!input.length) {
            throw new Error('Invalid input');
        }

        let ids = 0;
        input.forEach(item => {
            const isPossible = isGameSetPossible(item, gameCalibration);
            if (isPossible > -1) {
                ids += isPossible;
            }
        });
        return ids;
    }
    catch (err) {
        throw new Error('error from day 2 solution ', err);
    }
}
