function juiceBottling(input) {
    const juices = {};
    const bottles = {};

    for (const line of input) {
        const [juiceName, juiceQuantity] = line.split(' => ');
        const quantity = parseInt(juiceQuantity);

        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;
        }

        juices[juiceName] += quantity;

        while (juices[juiceName] >= 1000) {
            if (!bottles.hasOwnProperty(juiceName)) {
                bottles[juiceName] = 0;
            }
            bottles[juiceName]++;
            juices[juiceName] -= 1000;
        }
    }

    for (const juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }

    for (const juice in juices) {
        if (juices[juice] >= 1000) {
            console.log(`${juice} => ${Math.floor(juices[juice] / 1000)}`);
        }
    }
}
juiceBottling(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])