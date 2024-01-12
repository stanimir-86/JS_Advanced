function carProductionRegister(input) {
    const carRegister = {};

    for (const entry of input) {
        const [brand, model, producedCars] = entry.split(' | ').map((x) => (isNaN(x) ? x : parseInt(x)));

        if (!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }

        if (!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = 0;
        }

        carRegister[brand][model] += producedCars;
    }

    for (const brand in carRegister) {
        console.log(brand);
        for (const model in carRegister[brand]) {
            console.log(`###${model} -> ${carRegister[brand][model]}`);
        }
    }
}

carProductionRegister(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)