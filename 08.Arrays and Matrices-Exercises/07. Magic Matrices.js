function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);
    for (let i = 0; i < input.length; i++) {
        let rowSum = input[i].reduce((a, b) => a + b);
        let colSum = 0;

        for (let j = 0; j < input.length; j++) {
            colSum += input[j][i];
        }

        if (rowSum !== sum || colSum !== sum) {
            return false;
        }
    }

    return true;
}

solve([
            [1, 0, 0],
            [0, 0, 1],
            [0, 1, 0]
        ]
)