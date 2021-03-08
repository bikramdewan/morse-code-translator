

document.getElementById('english-morse').addEventListener('click', (english) => {
	english = document.getElementById("input").value;
	addToDom(englishToMorse(english));
})

document.getElementById('morse-english').addEventListener('click', (morse) => {
	morse = document.getElementById("input").value;
	addToDom(morseToEnglish(morse));
})

document.getElementById('clear').addEventListener('click', () => {
	document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
})
