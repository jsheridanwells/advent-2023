const numbersAsWordsLookup = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
};

const numbersAsWords = Object.keys(numbersAsWordsLookup);

function getNumberFromInputItem(itemInput) {
    let searchResults = [];

    for (let i = 0; i < itemInput.length; i++) {
        if (!isNaN(itemInput[i])) {
            searchResults.push({ idx: i, val: itemInput[i] });
        }
    }

    numbersAsWords.forEach(w => {
        const idx = itemInput.indexOf(w);
        if (idx != -1) {
            searchResults.push({ idx: idx + w.length, val: numbersAsWordsLookup[w] });
        }
    });

    searchResults = searchResults.sort((a, b) => a.idx - b.idx);
    if (searchResults.length === 0) {
        return 0;
    }
    // if (searchResults.length === 1) {
    return parseInt(searchResults[0].val + searchResults[searchResults.length - 1].val);
    // }
    
    // const item = itemInput.toLowerCase();
    // let searchResults = [];

    // const digits = item.match(/\d/g);
    // let idx = 0;
    // if (digits?.length) {
    //     searchResults.push({ idx, val: digits[idx] });
    //     if (searchResults.length > 1) {
    //         idx = itemInput.lastIndexOf(digits[digits.length - 1]);
    //         searchResults.push({ idx, val: digits[digits.length - 1] });
    //     }
    // }

    // numbersAsWords.forEach(w => {
    //     const idx = item.indexOf(w);
    //     if (idx > -1) {
    //         searchResults.push({ idx, val: numbersAsWordsLookup[w] });
    //     }
    // });
    // searchResults = searchResults.sort((a, b) => a.idx - b.idx);
    // const first = searchResults[0]?.val ?? 0;
    // const last = searchResults[searchResults.length - 1]?.val ?? 0;
    // console.log(' :::: ', searchResults, first, last)
    // return parseInt(first + last);
}

function runDayOnePtTwo(testInput) {

    if (!testInput || testInput?.length < 1) {
        throw new Error('Invalid input');
    }

    let sum = 0;

    try {
        testInput.forEach(i => {
            sum += getNumberFromInputItem(i);
        });
        return sum;
    }
    catch (err) {
        throw new Error('error from day 1, part 2 solution ', err);
    }
}

module.exports = runDayOnePtTwo;