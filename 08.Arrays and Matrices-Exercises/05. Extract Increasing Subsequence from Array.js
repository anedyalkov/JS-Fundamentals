function solve(array) {
    //  let result = [];
    //  let currentNumber = array[0];

    //  for (let i = 0; i < array.length; i++) {
    //      if (array[i] >= currentNumber) {
    //          result.push(array[i]);
    //          currentNumber = array[i];
    //      }
    //  }

    // console.log(result.join('\n'));
    
    let filteredArray = array.filter((e, i) => {
        return e >= Math.max(...array.slice(0, i + 1))
    }).join("\n");

    console.log(filteredArray);
}

solve([1,3,8,4,10,12,3,2,24])