function extractIncreasingSubsequenceFromArray(input) {
    let result = [];
    let currentMax = input[0];

    for (const num of input) {
        if (num >= currentMax) {
            currentMax = num;
            result.push(num);
        }
    }

    return result;
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])