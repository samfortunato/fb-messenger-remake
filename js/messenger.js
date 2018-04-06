// Variables

const messages = document.getElementById('messages');
const typeMessageContainer = document.getElementById('message-type');
const typeMessageInput = document.querySelector('input[name="message"]');

// Functions

const sendMessage = (message) => {

	let div = document.createElement('DIV');
	let p = document.createElement('P');
	let messageText = document.createTextNode(message);

	p.appendChild(messageText);
	div.appendChild(p);

	div.className = 'message sent';

	return div;

};

// Event Listeners

typeMessageContainer.addEventListener('submit', (e) => {

	e.preventDefault();

	let message = typeMessageInput.value;

	if (!typeMessageInput.value) {
		return false;
	}

	messages.appendChild(sendMessage(message));

	typeMessageInput.value = '';

	window.scrollTo(0, 10000000000);

	return true;

});

messages.addEventListener('click', () => {

	typeMessageInput.focus();

});