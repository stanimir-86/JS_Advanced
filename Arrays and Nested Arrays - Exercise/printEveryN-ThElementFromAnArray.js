function printEveryNThElementFromAnArray(arr, step) {

    let newArr = [];
    for (let i = 0; i < arr.length; i += step) {
        let element = arr[i];
        newArr.push(element);
    }
    return newArr;
}
printEveryNThElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);