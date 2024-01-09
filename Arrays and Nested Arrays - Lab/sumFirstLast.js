function sumFirstLast(input) {

    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());
    let sumElements = firstElement + lastElement;
    return sumElements;

}
sumFirstLast(['20', '30', '40'])