function processOddPositions(input) {
    let newArr = [];
    for (let i = 1; i < input.length; i += 2) {
        let element = Number(input[i]) * 2;
        newArr.push(element);
    }
    return newArr.reverse().join(" ");
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);