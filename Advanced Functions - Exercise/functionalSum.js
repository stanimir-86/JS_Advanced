function functionalSum(num) {

    let sum = 0;

    function inner(num2) {
        sum += num2;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner(num);
}
functionalSum(1)(6)(-3);