const alphabet = {
	0: '-----',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..',
	' ': '/',
	'!': '-·-·--',
	'.': '·-·-·-',
	',': '--··--',
};

const morse = {
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'/': ' ',
	'-·-·--': '!',
	'·-·-·-': '.',
	'--··--': ',',
};


const englishToMorse = (englishInput) => {
	const lowerCase = englishInput.toLowerCase().split(''); 
	const morseArray = lowerCase.map(morse => {  
		const morseLetter = alphabet[morse];
		return morseLetter;
	})
	return morseArray.join(' '); 
}

const morseToEnglish = (morseInput) => {
	const splitMorse = morseInput.split(' '); 
	const englishArray = splitMorse.map((english) => { 
		const englishLetter = morse[english];
		return englishLetter;
	})
	return englishArray.join('');  
}

const addToDom = (translate) => {
	document.getElementById("output").innerHTML = translate;
}

module.exports = {englishToMorse, morseToEnglish, addToDom};
