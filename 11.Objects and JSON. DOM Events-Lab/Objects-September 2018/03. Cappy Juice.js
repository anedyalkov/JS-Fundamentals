function solve(input){
    let juices = {};
    let bottles = {};
    for(let line of input){
        let [juice,quantity] = line.split('=>');
        if(!juices.hasOwnProperty(juice)){
            juices[juice] = +quantity;
            if(quantity >= 1000){
                while(juices[juice] >= 1000){
                    if (!bottles.hasOwnProperty(juice)) {
                        bottles[juice] = 0;
                    }
                    bottles[juice] += 1;
                    juices[juice] -= 1000;
                }
            }
        } else {
            juices[juice] += +quantity;
             if (juices[juice] >= 1000) {
                 while (juices[juice] >= 1000) {
                    if (!bottles.hasOwnProperty(juice)) {
                        bottles[juice] = 0;
                    }
                     bottles[juice] += 1;
                     juices[juice] -= 1000;
                 }
             }
        }
    }

    for (let prop in bottles) {
        console.log(`${prop}=> ${bottles[prop]}`);
    }
}

solve(['Kiwi => 234',
            'Pear => 2345',
            'Watermelon => 3456',
            'Kiwi => 4567',
            'Pear => 5678',
            'Watermelon => 6789'
        ]
)