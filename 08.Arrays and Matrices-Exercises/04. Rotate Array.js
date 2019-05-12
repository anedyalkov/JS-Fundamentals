function solve(array) {
    
    let rotationAmount = +array.pop();
    function shiftArrayToRight(array, rotationAmount) {
        for (let i = 0; i < rotationAmount % array.length; i++) {
            array.unshift(arr.pop());
        }
    }
    shiftArrayToRight(array,rotationAmount);
    console.log(array.join(' '));
}

solve(['Banana',
            'Orange',
            'Coconut',
            'Apple',
            '15'
        ]
)