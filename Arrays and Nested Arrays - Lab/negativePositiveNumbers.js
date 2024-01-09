function negativePositiveNumbers(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let element = Number(input[i]);

        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }

    }
for (const elements of newArr) {
    console.log(elements);
}
}
negativePositiveNumbers([7, -2, 8, 9]);