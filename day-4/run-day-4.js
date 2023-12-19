function parseInput(inputStr) {
    let inputSets = null, winningSet = [], availableSet = [];
    const [_, numbers] = inputStr.split(':');
    if (numbers?.length) {
        [winningSet, availableSet] = numbers.split('|');
        inputSets = [
            extractNumbers(winningSet).sort(),
            extractNumbers(availableSet).sort()
        ];
    }
    return inputSets;
}

function extractNumbers(numberStr) {
    return numberStr.match(/\d+/g);
}

function findTotalValue(winning, available) {
    const matching = winning.filter(el => available.includes(el));
    let val = 0;
    if (matching.length) {
        val++;
        for (let i = 1; i < matching.length; i++) {
            val *= 2;
        }
    }
    return val;
}

module.exports = function (input) {
    let totalCardValues = 0;
    try {
        input.forEach(item => {
            const parsedInput = parseInput(item);
            if (Array.isArray(parsedInput) && parsedInput.length === 2) {
                const [winningSet, availableSet] = parsedInput;
                const cardValue = findTotalValue(winningSet, availableSet);
                totalCardValues += cardValue;
            }
        });
        return totalCardValues;
    }
    catch (err) {
        console.error('Error running day 4 solution', err);
    }
}