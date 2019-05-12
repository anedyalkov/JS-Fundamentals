function solve() {
   let filterBtn = document.getElementsByTagName('button')[0];
   let sortBtn = document.getElementsByTagName('button')[1];
   let rotateBtn = document.getElementsByTagName('button')[2];
   let getBtn = document.getElementsByTagName('button')[3];

   let output = document.querySelector('#output p');

   filterBtn.addEventListener('click', filter);
   sortBtn.addEventListener('click', sort);
   rotateBtn.addEventListener('click', rotate);
   getBtn.addEventListener('click', get);

   function filter(){

      let input = document.getElementById('input').value;

      let secondaryCommand = document.getElementById('filterSecondaryCmd').value;
      let position = +document.getElementById('filterPosition').value;
      let result;
      if (secondaryCommand === 'uppercase'){
         result = input.split('').filter((ch) => {
            return ch === ch.toUpperCase() && isNaN(ch);
         });

         let letter = result[position - 1];
         output.textContent += letter;
      } else if (secondaryCommand === 'lowercase'){
          result = input.split('').filter((ch) => {
             return ch === ch.toLowerCase() && isNaN(ch);
          });

          let letter = result[position - 1];
          output.textContent += letter;
      } else if (secondaryCommand === 'nums'){
         result = input.split('').filter((ch) => {
            if(!isNaN(ch)){
               return ch;
            } else {
                return false;
            }       
         });

         let number = result[position - 1];
         output.textContent += number;
      }
   }

   function sort() {

      let input = Array.from(document.getElementById('input').value);
      let secondaryCommand = document.getElementById('sortSecondaryCmd').value;
      let position = +document.getElementById('sortPosition').value;
      let result;

      if (secondaryCommand === 'A') {
        result = input.sort((a,b) => {
           return a.localeCompare(b);
        });
        let element = result[position - 1];
        output.textContent += element;
      } else if (secondaryCommand === 'Z') {
           result = input.sort((a, b) => {
              return b.localeCompare(a);
           });
           let element = result[position - 1];
           output.textContent += element;
      }
   }

   function rotate(){
      let input = Array.from(document.getElementById('input').value);
      let secondaryCommand = +document.getElementById('rotateSecondaryCmd').value;
      let position = +document.getElementById('rotatePosition').value;
      let result;
      for (let i = 0; i < secondaryCommand % input.length; i++) {
         input.unshift(input.pop());       
      };

      let element = input[position - 1];
      output.textContent += element;
   }

   function get(){
      let input = Array.from(document.getElementById('input').value);
      let position = +document.getElementById('getPosition').value;
      output.textContent += input[position - 1];
   }
}
