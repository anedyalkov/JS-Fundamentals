function solve() {
  let inputValue = document.getElementById('str').value;
  let output = document.getElementById('result');
  let inputValueAsArray = inputValue.split(' ');

  let convertedWordsArr = inputValueAsArray.filter((el) => {
      return isNaN(el);
    })
    .map((word) => {
      let result = word.split('')
        .map((ch) => {
          let number = ch.charCodeAt(0);
          return number;
        })
        .join(' ')
      return result;
    })

  convertedWordsArr.forEach((str) => {
    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = str;
    output.appendChild(paragraphElement);
  });

  let convertedNums = inputValueAsArray.filter((el) => {
      return !isNaN(el);
    })
    .map(Number)
    .map((num) => {
      let result = String.fromCharCode(num);
      return result;
    })
    .join('');
    
  let paragraphElement = document.createElement('p');
  paragraphElement.textContent = convertedNums;
  output.appendChild(paragraphElement);

}