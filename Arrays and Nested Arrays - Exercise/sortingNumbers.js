function sortingNumbers(input) {
    let result = [];
    let sorted = input.sort((a, b) => a - b);
    while (sorted.length !== 0) {
        let smallEl = sorted.shift();
        let largeElement = sorted.pop();
        result.push(smallEl, largeElement)
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])