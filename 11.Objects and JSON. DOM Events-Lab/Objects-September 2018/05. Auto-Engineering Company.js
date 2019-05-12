function solve(input){
    let cars = {};
    for(let line of input){
        let[brand, model, quantity] = line.split(' | ');

        if(!cars.hasOwnProperty(brand)){
            cars[brand] = {};
            cars[brand][model] = +quantity;
           
        } else {
            if(!cars[brand].hasOwnProperty(model)){
                cars[brand][model] = +quantity;
            } else {
                cars[brand][model] += +quantity;
            }
        }
    }
   for (let [brand, models] of Object.entries(cars)) {
       console.log(brand);
       for (let [model, quantity] of Object.entries(models)) {
           console.log(`###${model} -> ${quantity}`)
       }
   }
}

solve(['Audi | Q7 | 1000',
            'Audi | Q6 | 100',
            'BMW | X5 | 1000',
            'BMW | X6 | 100',
            'Citroen | C4 | 123',
            'Volga | GAZ-24 | 1000000',
            'Lada | Niva | 1000000',
            'Lada | Jigula | 1000000',
            'Citroen | C4 | 22',
            'Citroen | C5 | 10'
        ]
)