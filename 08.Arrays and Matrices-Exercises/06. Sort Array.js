function solve(input) {
    let result = input.sort(sortProducts).join('\n')
    console.log(result)

    function sortProducts(a, b) {
        let aLength = a.length
        let bLength = b.length
        let result = aLength - bLength

        // Alphabetical sort
        if (result === 0) {
            return a.localeCompare(b)
        }

        return result;
    }
}

solve(["alpha", "beta", "gamma"])