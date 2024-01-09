function equalNeighbors(array) {
    let sumFirstLine = array[0].reduce((a, b) => a + b);
    for (let i = 0; i < array[0].length; i++) {
        let currentColums = 0;
        for (let j = 0; j < array.length; j++) {
            currentColums += array[j][i]
        }
        if (currentColums !== sumFirstLine) {
            return false;
        }
    }
    return true;

}

equalNeighbors([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);