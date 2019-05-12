// function solve() {
//   let inputText = document.getElementById("arr").value;
//   let inputArr = JSON.parse(inputText);
//   let arr = [];
//   console.log(inputArr);
//   for(let word of inputArr){

//     let reversedWord = word.split('').reverse().join('');
//     console.log(reversedWord);
//     reversedWord = reversedWord
//         .charAt(0)
//         .toUpperCase()
//         .concat(reversedWord.slice(1));

//     arr.push(reversedWord);
//   }

//   let result = arr.join(" ");

//   let divResult = document.getElementById("result");
//   divResult.textContent = result;
// }

function solve() {
    let inputText = document.getElementById("arr").value;
    let inputArr = JSON.parse(inputText);
    console.log(inputArr);

    inputArr = inputArr.map((word,idx,arr) => {
      // return word
      //     .split("")
      //     .reverse()
      //     .join("");
      let reversedWord =  word
        .split("")
        .reverse()
        .join("");
        return reversedWord;
    })
    //first solution------------------

    // inputArr.map((word, idx, arr) => {
    //   arr[idx] =  word
    //     .split("")
    //     .reverse()
    //     .join("");
    //   return arr[idx];
    // })
    // second solution----------------

    // inputArr = inputArr.map(reverseWord);

    // function reverseWord(word){
    //   let reversedWord = word
    //       .split("")
    //       .reverse()
    //       .join("");
    //       return reversedWord;

    // }
    //third solution------------------

    // inputArr.forEach(reverseWord);

    // function reverseWord(word) {
    //   let reversedWord = word
    //     .split("")
    //     .reverse()
    //     .join("");
    //   return reversedWord;

    // }
    //this solution does not work

    // inputArr.forEach((word,index,arr) => {
    //     arr[index] = word
    //         .split("")
    //         .reverse()
    //         .join("");
    // });
    // console.log(inputArr);
    //fourth solution------------------

    let resultArr = inputArr.map(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        return word;
    });

    let divResult = document.getElementById("result");
    divResult.textContent = resultArr.join(" ");
}
