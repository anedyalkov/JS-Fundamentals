function solve() {

	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	let titleValue = titleElement.value;
	let contentValue = contentElement.value;

	if (titleValue && contentValue) {

		let newArticle = document.createElement('article');
		let heading = document.createElement('h3');
		let paragraph = document.createElement('p');

		heading.textContent = titleValue;
		paragraph.textContent = contentValue;

		let section = document.querySelector('#articles')

		newArticle.appendChild(heading);
		newArticle.appendChild(paragraph);
		section.appendChild(newArticle)

		titleElement.value = '';
		contentElement.value = '';
	}
}