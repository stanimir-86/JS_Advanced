function generateSequence(n, k) {
    const sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - 1; j >= Math.max(i - k, 0); j--) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }

    return sequence;
}
console.log(generateSequence(6, 3))