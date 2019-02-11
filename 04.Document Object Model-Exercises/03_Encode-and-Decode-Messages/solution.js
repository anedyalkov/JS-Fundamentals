// function solve() {
// 	let buttons = document.querySelectorAll('#exercise button');

// 	let textAreas = document.querySelectorAll('#exercise textarea')

// 	let senderTextArea = textAreas[0];
// 	let receiverTextArea = textAreas[1];

// 	let encodeAndSendBtn = buttons[0];
// 	let decodeAndReadBtn = buttons[1];

// 	encodeAndSendBtn.addEventListener('click', encodeMessage);
// 	decodeAndReadBtn.addEventListener('click', decodeMessage);

// 	function encodeMessage() {
// 		let message = senderTextArea.value;
// 		let encodedMessage = '';

// 		for (let i = 0; i < message.length; i++) {
// 			let letter = String.fromCharCode(message.charCodeAt(i) + 1)
// 			encodedMessage += letter;
// 		}
// 		receiverTextArea.value = encodedMessage;
// 		senderTextArea.value = '';
// 	}

// 	function decodeMessage() {
// 		let message = receiverTextArea.value;
// 		let decodedMessage = '';

// 		for (let i = 0; i < message.length; i++) {
// 			let letter = String.fromCharCode(message.charCodeAt(i) - 1)
// 			decodedMessage += letter;
// 		}
// 		receiverTextArea.value = decodedMessage;
// 	}
// }
function solve() {
	let buttons = document.getElementsByTagName('button');
	let textAreas = document.getElementsByTagName('textarea');

	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);

	function encode() {

		let encodeMessage = textAreas[0].value;

		let newMessage = '';

		encodeMessage.split('').forEach((char) => {
			let asciiValue = char.charCodeAt(0) + 1;
			newMessage += String.fromCharCode(asciiValue);
		});

		textAreas[0].value = "";
		textAreas[1].value = newMessage;
	}


	function decode() {

		let decodeMessage = textAreas[1].value;
		let originalMessage = "";

		decodeMessage.split('').forEach((char) => {
			let asciiValue = char.charCodeAt(0) - 1;
			originalMessage += String.fromCharCode(asciiValue);
		});

		textAreas[1].value = originalMessage;
	}
}