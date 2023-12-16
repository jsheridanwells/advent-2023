function mapSymbols(input) {
    const mappedArr = [];
    input.forEach((item, i) => {
        for (let j = 0; j < item.length; j++) {
            const char = item[j];
            if (/[^.|\w|\d|\s]/g.test(char)) {
                mappedArr.push([i, j]);
            }
        }
    });
    return mappedArr;
}

function locateSymbols(x, y, map) {
    const locations = [
        [x, y - 1],
        [x - 1, y],
        [x, y + 1],
        [x + 1, y],
        [x + 1, y + 1],
        [x - 1, y - 1],
        [x - 1, y + 1],
        [x + 1, y - 1]
    ];
    return locations.some(sub => map.some(coor => sub[0] === coor[0] && sub[1] === coor[1]));
}

module.exports = function runDay3(input) {
    let ids = 0
    const globalMap = mapSymbols(input);
    for (let i = 0; i < input.length; i++) {
        let holdId = '';
        let hasSymbol = false;
        for (let j = 0; j < input[i].length; j++) {
            const char = input[i][j];
            const isSymbol = /[^.|\w|\d|\s]/g.test(char);
            const isNumber = /\d/g.test(char);

            if (isSymbol) {
                hasSymbol = isSymbol;
                continue;
            }

            if (isNumber) {
                holdId += char;
                if (!hasSymbol) {
                    hasSymbol = locateSymbols(i, j, globalMap);
                }
                continue;
            }

            if (hasSymbol) {
                ids += +holdId;
                holdId = '';
                hasSymbol = false;
                continue;
            }

            holdId = '';
        }
        if (holdId.length > 0 && hasSymbol) {
            ids += +holdId;
            holdId = '';
            hasSymbol = false;
        }
    }
    return ids;
}
