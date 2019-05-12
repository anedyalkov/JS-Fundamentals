function solve() {
  let inputText = document.getElementById("arr").value;
  let inputArr = JSON.parse(inputText);
  console.log(typeof(inputText))
  console.log(typeof(inputArr))
  let arr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i % 2 === 0) {
      arr.push(inputArr[i]);
    }   
  }

  let result = arr.join(' x ');

  let divResult = document.getElementById('result');
  divResult.textContent = result;
} 