// function solve(input) {

//     let step = +input.pop();

//     for (let i = 0; i < input.length; i+=step) {
//         console.log(input[i]);
//     }
// }

function solve(input) {

    let step = +input.pop();

   let arrResult = input.reduce((acc, el, idx) =>{
    if(idx % step === 0){
        acc.push(el);
    }
    return acc;

   }, [])

    console.log(arrResult.join('\n'));
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2'])