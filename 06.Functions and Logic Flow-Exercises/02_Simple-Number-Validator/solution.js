function validate() {
    let button = document.querySelector('#exercise button');
    let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];

    button.addEventListener('click', checkNumber);

    function checkNumber() {
        let numberInput = document.getElementsByTagName('input')[0];

        let getLastDigit = () => Number(numberInput.value) % 10;
        let lastDigit = getLastDigit();

        let getSumOfProductOfDigitWithWeight = () => {
            let sum = 0;
            for (let i = 0; i < numberInput.value.length - 1; i++) {
                sum += Number(numberInput.value[i]) * weightPosition[i];
            }
            return sum;
        };
        let result = getSumOfProductOfDigitWithWeight();

        let divideByEleven = () => getSumOfProductOfDigitWithWeight() % 11 === 10 ? 0 : getSumOfProductOfDigitWithWeight() % 11;
        let divideByElevenResult = divideByEleven();

        if (lastDigit === divideByElevenResult) {
            document.getElementById('response').textContent = 'This number is Valid!';
        } else {
            document.getElementById('response').textContent = 'This number is NOT Valid!';
        }
    }
}

//second decision

// function validate() {
//     let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
//     let responseSpan = document.getElementById("response");


//     let checkBtn = document.querySelector("button");
//     checkBtn.addEventListener("click", function () {
//         let numbers = document.querySelector("input").value.toString();

//         let validationCounter = 0;

//         let sum = 0;

//         function SumWeight() {
//             let numsArr = numbers.split("");
//             for (i = 0; i < numsArr.length; i++) {
//                 if (+numbers[i] < 0 || +numbers[i] > 9) {
//                     validationCounter++;
//                 }

//                 if (i + 1 == 10) {
//                     break;
//                 } else {
//                     sum += (+numbers[i] * +weightPosition[i]);
//                 }
//             }
//         }

//         SumWeight();

//         let remainder = (sum % 11);
//         if (((remainder) % 10) === 0) {
//             remainder = 0;
//         }

//         if ((+remainder === +numbers[9]) && (validationCounter === 0)) {
//             responseSpan.innerHTML = "This number is Valid!";
//         } else {
//             responseSpan.innerHTML = "This number is NOT Valid!";
//         }
//     })
// }