// function solve() {
//   let inputText = document.getElementById("arr").value;
//   let inputArr = JSON.parse(inputText);

//   let result = inputArr.map((el, idx, arr) => {

//     return `${idx} -> ${el * arr.length}`;
//   })

//   let divResult = document.getElementById('result');

//   for (let el of result) {
//     let p = document.createElement('p');
//     p.textContent = el;
//     divResult.appendChild(p);
//   }
// }

function solve() {
  let inputText = document.getElementById("arr").value;
  let inputArr = JSON.parse(inputText);

  let divResult = document.getElementById('result');

  for (let i = 0; i < inputArr.length; i++) {
    let element = inputArr[i];
    let result = element * inputArr.length;

    let p = document.createElement('p');
    p.textContent =  `${i} -> ${result}`;
    divResult.appendChild(p);   
  }
}