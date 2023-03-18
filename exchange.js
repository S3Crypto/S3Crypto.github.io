const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');
const synth = window.speechSynthesis;

textInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		const utterance = new SpeechSynthesisUtterance(textInput.value);
		synth.speak(utterance);
		textOutput.innerText = textInput.value;
		textInput.value = '';
	}
});
