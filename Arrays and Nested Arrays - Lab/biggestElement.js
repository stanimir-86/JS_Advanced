function findLargestElement(input) {
    let largestElement = input[0][0];

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] > largestElement) {
                largestElement = input[row][col];
            }
        }
    }

    return largestElement;
}
findLargestElement(
    [[20, 50, 10],
    [8, 33, 145]]
);
findLargestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);