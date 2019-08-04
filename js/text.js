

let randomLetter;
let flickerNumber;
let counter;
let newMessage = '';

const messageEl = document.getElementById('message');
const message = messageEl.innerHTML;
const characters = message.length;

for (let i = 0; i < characters; i++) {
	newMessage = newMessage + '<i>' + message.charAt(i) + '</i>';
}

messageEl.innerHTML = newMessage;
const letters = document.getElementsByTagName('i');
const flickers = [5, 7, 9, 11, 13, 15, 17, 2, 3, 10, 12, 18, 14 ];

function randomFromInterval(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}

function hasClass(element, cls) {
	if (element.className == cls)
		return true;
	else
		return false;
}

function flicker() {
	counter += 1;
	if (counter === flickerNumber) { return; }
	setTimeout(function () {
		if (hasClass(randomLetter, 'off')) {
			randomLetter.className = '';
		}
		else {
			randomLetter.className = 'off';
		}
		flicker();
	}, 300);
}

(function loop() {
	randomLetter = randomFromInterval(0, 18);
	randomLetter = letters[randomLetter];
	flickerNumber = randomFromInterval(0, 18);
	flickerNumber = flickers[flickerNumber];
	setTimeout(function () {
		counter = 0;
		flicker();
		loop();
	}, 1000);
}());