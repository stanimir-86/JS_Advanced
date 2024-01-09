function biggerHalf(input) {
    let secondHalf;
    let sortedArr = input.sort((a, b) => a - b);
    let inputLength = Number(input.length);
    if (inputLength % 2 === 0) {
        return secondHalf = sortedArr.slice(inputLength / 2);
    } else {
        return secondHalf = sortedArr.slice((inputLength / 2));
    }
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
