function solve(input) {

    let string = input;
    console.log(string);

    let stringAsArr = string.split('');
    console.log(stringAsArr);

    // for (let index = 0; index < stringAsArr.length; index++) {
    //     console.log(stringAsArr[index]);
    // }

      stringAsArr = string.split(' ');
      console.log(stringAsArr);

    stringAsArr = string.split();
    console.log(stringAsArr);

      // for (let index = 0; index < stringAsArr.length; index++) {
      //     console.log(stringAsArr[index]);
      // }


}
solve('Hello');