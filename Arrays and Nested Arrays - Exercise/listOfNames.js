function listOfNames(input) {

    let sorted = input.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < sorted.length; i++) {
        let element = sorted[i];
        let currNum = Number(i + 1);
        console.log(`${currNum}.${element}`);
    }
}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"]
)