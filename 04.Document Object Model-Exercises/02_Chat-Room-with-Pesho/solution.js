// function solve() {
//     document.querySelector('button[name = "myBtn"]').addEventListener("click", meSendMessage);
//     document.querySelector('button[name = "peshoBtn"]').addEventListener("click", peshoSendMessage);
    
//     function meSendMessage(){
//         let myInputElementContent = document.getElementById("myChatBox").value;
//         let div = document.createElement("div");
//         div.style.textAlign = "left";
//         let span = document.createElement("span");       
//         let paragraph = document.createElement('p');
//         span.textContent = "Me";
//         paragraph.textContent = myInputElementContent;
//         div.appendChild(span);
//         div.appendChild(paragraph);
//         let chatChronologyDiv = document.querySelector("#chatChronology");
//         chatChronologyDiv.appendChild(div);
//         document.getElementById("myChatBox").value = '';
//     }

//     function peshoSendMessage(){
//         let peshoInputElementContent = document.getElementById("peshoChatBox").value;
//         let div = document.createElement("div");
//         div.style.textAlign = "right";
//         let span = document.createElement("span");
//         let paragraph = document.createElement('p');
//         span.textContent = "Pesho";
//         paragraph.textContent = peshoInputElementContent;
//         div.appendChild(span);
//         div.appendChild(paragraph);
//         let chatChronologyDiv = document.querySelector("#chatChronology");
//         chatChronologyDiv.appendChild(div);
//         document.getElementById("peshoChatBox").value = '';
//     }   
// }
function solve() {
    // 0 is mine, 1 is pesho
    let buttons = Array.from(document.querySelectorAll('#exercise button'));
    let inputFields = Array.from(document.querySelectorAll('#exercise input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', function() {

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');

            let senderBtn = event.target.name;

            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent = document.getElementById('myChatBox').value;

                divElement.style.textAlign = 'left';

            } else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent = document.getElementById('peshoChatBox').value;

                divElement.style.textAlign = 'right';
            }

            divElement.appendChild(spanElement);
            divElement.appendChild(pElement);


            document.getElementById('chatChronology').appendChild(divElement);

            inputFields[0].value = "";
            inputFields[1].value = "";
        })
    })
}
