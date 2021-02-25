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


const englishToMorse = () => {

	//getting inputs from user
    const userInput = document.getElementById("input").value; 
	// converting to lowercase and separate char by putting default space (,) and retuns new array
	const lowerCase = userInput.toLowerCase().split(''); 
	// creating a new array with maping
	const newArray = lowerCase.map((morse) => {  
		// fetching value by passing the key 'morse'
		const morseLetter = alphabet[morse];
		return morseLetter;
	})
	const translate = newArray.join(' '); // separate char and word by joining single space (' ') and returns string
	document.getElementById("output").innerHTML = translate; // output result 
}

const morseToEnglish = () =>{
	//getting inputs from user 
    const userInput = document.getElementById("input").value;  
	// separate morse char by putting single space (' ') and returns string
	const splitMorse = userInput.split(' '); 
	// creating a new array with maping
	const newArray = splitMorse.map((english) => { 
		// fetching value by passing the key 'english' 
		const englishLetter = morse[english];
		return englishLetter;
	})
	const translate = newArray.join(''); // separate char and word by joining default space ('') and returns string 
	document.getElementById("output").innerHTML = translate;
}

const clearInputOutput = () => {
	document.getElementById("input").value = "";
	document.getElementById("output").innerHTML = "";
}


