function greatestCD() {
    // let resultSpan = document.getElementById("result");

    // let firstNumber = Number(document.getElementById("num1").value);
    // let secondNumber = Number(document.getElementById("num2").value);

    // let num1 = firstNumber;
    // let num2 = secondNumber;

    // while (true) {
    //     let temp = num1 % num2;

    //     num1 = num2
    //     num2 = temp;

    //     if (!num2) {
    //         resultSpan.textContent = num1;
    //         break;
    //     }
    // }

    let resultElement = document.getElementById('result');
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    resultElement.innerHTML = gcd(num1, num2);

    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
}