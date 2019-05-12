function solve(input) {
    let coffeeStorage = {};

    for (let line of input) {
        let tokens = line.split(', ');
        let command = tokens[0];
        let nameOfBrand = tokens[1];
        let coffeeName = tokens[2];
        let expireDate = tokens[3];
        let quantity = +tokens[4];
        if (command === 'IN') {
            if (!coffeeStorage.hasOwnProperty(nameOfBrand)) {
                coffeeStorage[nameOfBrand] = {};
                coffeeStorage[nameOfBrand][coffeeName] = {
                    expireDate,
                    quantity
                }
            } else {
                if (!coffeeStorage[nameOfBrand].hasOwnProperty(coffeeName)) {
                    coffeeStorage[nameOfBrand][coffeeName] = {
                        expireDate,
                        quantity
                    }
                } else {
                    let result = compareTwoDates(coffeeStorage[nameOfBrand][coffeeName].expireDate, expireDate);
                    if (result === -1) {
                        coffeeStorage[nameOfBrand][coffeeName] = {
                            expireDate,
                            quantity
                        };
                    } else if (result === 0) {
                        coffeeStorage.nameOfBrand.coffeeName.quantity = quantity;
                    }
                }
            }
        } else if (command === 'OUT') {
            if (coffeeStorage.hasOwnProperty(nameOfBrand) && coffeeStorage[nameOfBrand].hasOwnProperty(coffeeName)) {
                let result = compareTwoDates(coffeeStorage[nameOfBrand][coffeeName].expireDate, expireDate);
                if (result === 1 && coffeeStorage[nameOfBrand][coffeeName].quantity >= quantity) {
                    coffeeStorage[nameOfBrand][coffeeName].quantity -= quantity;
                }
            }
        } else if (command === 'REPORT') {
            let output = '';
            console.log('>>>>> REPORT! <<<<<');
            for (let [nameOfBrand, nameOfBrandObj] of Object.entries(coffeeStorage)) {
                output += `Brand: ${nameOfBrand}:\n`;
                for (let [coffeeName, coffeeNameObj] of Object.entries(nameOfBrandObj)) {
                    output += `-> ${coffeeName} -> ${coffeeNameObj.expireDate} -> ${coffeeNameObj.quantity}.\n`
                }
            }
            console.log(output.trim());
        } else if (command === 'INSPECTION') {
            let output = '';
            console.log('>>>>> INSPECTION! <<<<<');
            for (let [nameOfBrand, nameOfBrandObj] of Object.entries(coffeeStorage).sort((a, b) => {
                    return a[0].localeCompare(b[0])
                })) {
                output += `Brand: ${nameOfBrand}:\n`;
                console.log(Object.entries(nameOfBrandObj));
                for (let [coffeeName, coffeeNameObj] of Object.entries(nameOfBrandObj).sort((a, b) => {
                        return b[1].quantity - a[1].quantity;
                    })) {
                    output += `-> ${coffeeName} -> ${coffeeNameObj.expireDate} -> ${coffeeNameObj.quantity}.\n`
                }
            }
            console.log(output.trim());
        }
    }


    function compareTwoDates(firstDate, secondDate) {
        let result = firstDate.localeCompare(secondDate);
        return result;
    }
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
])

// solve([
//     "IN, Batdorf & Bronson, Espresso, 2005 - 01 - 25, 15",
// "IN, Batdorf & Bronson, NotEspresso, 2025 - 06 - 15, 10",
// "IN, Batdorf & Bronson, NotEspresso, 2025 - 06 - 16, 25",
// "REPORT"
// ]
// )