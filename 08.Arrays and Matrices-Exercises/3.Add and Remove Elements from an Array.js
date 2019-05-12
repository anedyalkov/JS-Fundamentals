// function solve(commands) {
//     let array = [];
//     let count = 1;
//     for (let command of commands) {
//         if (command === 'add') {
//             array.push(count);
//             count++
//         } else {
//             array.pop();
//             count++;
//         }
//     }

//     if (array.length === 0) {
//         console.log('Empty');
//     } else {
//         array.forEach((num) => {
//             console.log(num);
//         });
//     }
// }

function solve(commands) {
    let arrResult = commands.reduce((acc,el,idx) => {
    if(el === 'add'){
        acc.push(idx + 1)

    } else {
        acc.pop()
    }
    return acc;
    },[]);

      if (arrResult.length === 0) {
          console.log('Empty');
      } else {
          arrResult.forEach((num) => {
              console.log(num);
          });
      }
}

solve(['add',
            'add',
            'remove',
            'add',
            'add'
        ])