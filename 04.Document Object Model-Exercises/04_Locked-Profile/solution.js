function solve() {

   let buttons = Array.from(document.querySelectorAll('#exercise button'));
   buttons.forEach((b) => {
      b.addEventListener('click', showUserInformation)
   });

   function showUserInformation(event) {
      let userDiv = event.target.parentNode;

      let inputTypesRadio = userDiv.querySelectorAll('input');
      let divs = userDiv.querySelectorAll('div');
      let hiddenDiv = divs[1];

      let unlockRadioBtn = inputTypesRadio[1];

      // let unlockRadioBtnIsChecked = unlockRadioBtn.checked;

      let button = event.target;

      if (unlockRadioBtn.checked) {
         hiddenDiv.style.display = 'inline-block';
         button.textContent = 'Hide it';
      }

       event.target.addEventListener('click', hideUserInformation);
   }

   function hideUserInformation() {
      let userDiv = event.target.parentNode;

      let inputTypesRadio = userDiv.querySelectorAll('input');
      let divs = userDiv.querySelectorAll('div');
      let hiddenDiv = divs[1];

      let unlockRadioBtn = inputTypesRadio[1];

      let unlockRadioBtnIsChecked = unlockRadioBtn.checked;

      let button = event.target;

      if (unlockRadioBtnIsChecked) {
         hiddenDiv.style.display = 'none';
         button.textContent = 'Show more';
      }
   }
}

// function solve() {

//    let buttons = Array.from(document.querySelectorAll('#exercise button'));
//    buttons.forEach((b) => {
//       b.addEventListener('click', showUserInformation)
//    });

//    function showUserInformation(event) {
//       let userDiv = event.target.parentNode;

//       let inputTypesRadio = userDiv.querySelectorAll('input');
//       let divs = userDiv.querySelectorAll('div');
//       let hiddenDiv = divs[1];

//       let unlockRadioBtn = inputTypesRadio[1];

//       let button = event.target;

//       if (unlockRadioBtn.checked) {
//          hiddenDiv.style.display = 'inline-block';
//          button.textContent = 'Hide it';
//       }
//       hideUserInformation(button, unlockRadioBtn, hiddenDiv);
//    }

//    function hideUserInformation(button, unlockRadioBtn, hiddenDiv) {
//       button.addEventListener('click', () => {

//          if (unlockRadioBtn.checked) {
//             hiddenDiv.style.display = 'none';
//             button.textContent = 'Show more';
//          }
//       })
//    }
// }

 