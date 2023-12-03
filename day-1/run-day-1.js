function runDayOne(testInput) {
    if (!testInput || testInput?.length < 1) {
        throw new Error('Invalid input');
    }

    let sum = 0;

    try {
        testInput.forEach(i => {
            const digits = i.match(/[0-9]/g);
            if (digits && digits.length > 0) {
                const first = digits[0];
                const last = digits[digits.length - 1];
                sum += parseInt(first + last);
            }
        });

        return sum
    }
    catch (err) {
        throw new Error('error from day 1 solution ', err);
    }
}

module.exports = runDayOne;