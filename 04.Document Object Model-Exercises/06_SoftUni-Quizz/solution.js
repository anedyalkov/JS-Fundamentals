function solve() {
	let buttons = Array.from(document.getElementsByTagName('button'));
	console.log(buttons);
	let counter = 0;
	buttons.forEach((b) => {
		b.addEventListener('click', function (event) {
			let exerciseDiv = event.target.parentNode.parentNode;
			let section = event.target.parentNode;
			let radioBtns = section.getElementsByTagName('input');
			if (exerciseDiv.children[0] === section) {
				exerciseDiv.children[1].style.display = 'block';

				if (radioBtns[1].checked) {
					counter++
				}
			} else if (exerciseDiv.children[1] === section) {
				exerciseDiv.children[2].style.display = 'block';

				if (radioBtns[2].checked) {
					counter++
				}
			} else {
				if (radioBtns[3].checked) {
					counter++
				}
				let divResult = document.getElementById('result');
				if (counter === 3) {
					divResult.innerHTML = 'You are recognized as top SoftUni fan!';
				} else {
					divResult.innerHTML = `You have ${counter} right answers`;
				}
			}
		})
	})
}