// function solve() {
//     let divElements = document.querySelectorAll("#main #exercise div");

//     for (let div of divElements) {
//         let anchorElement = div.childNodes[1];
//         if (anchorElement.textContent === "SoftUni") {
//             anchorElement.addEventListener("click", count);
//         } else if (anchorElement.textContent === "Google") {
//             anchorElement.addEventListener("click", count);
//         } else if (anchorElement.textContent === "YouTube") {
//             anchorElement.addEventListener("click", count);
//         } else if (anchorElement.textContent === "Wikipedia") {
//             anchorElement.addEventListener("click", count);
//         } else if (anchorElement.textContent === "Gmail") {
//             anchorElement.addEventListener("click", count);
//         } else if (anchorElement.textContent === "Stackoverflow") {
//             anchorElement.addEventListener("click", count);
//         }
//     }

//     function count(e) {
//         let div = e.target.parentNode;
//         let span = div.childNodes[3];
//         let spanText = span.innerHTML;
//         let spanTextParts = spanText.split(" ");
//         let number = +spanTextParts[1];
//         number += 1;
//         span.innerHTML = `Visited: ${number} times`;
//     }

//     // document.addEventListener("click",(e) => {

//     //     let div = e.target.parentNode; 
//     //     let span = div.childNodes[3];
//     //     let spanText = span.innerHTML;
//     //     let spanTextParts = spanText.split(" ");
//     //     let number = +spanTextParts[1];
//     //     number += 1;
//     //     span.innerHTML = `Visited: ${number} times`;
//     // })
// }

function solve() {
    Array.from(document.getElementsByTagName('a')).forEach(a => {
        a.addEventListener('click', () => {
            let span = a.parentNode.children[1];
            let visitedCounter = +span.textContent.split(' ')[1] + 1;

            span.textContent = `Visited: ${visitedCounter} times`;
        });
    });
}
