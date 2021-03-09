
const { expect } = require('@jest/globals');
const {englishToMorse, morseToEnglish} = require('./morse-code-translator');

describe('morse-code-translator', () => {
	test('should handle English uppercase char to Morse conversion', () => {
		expect(englishToMorse('A2B')).toBe('.- ..--- -...');
	})

	test('should handle Morse to English conversion', () => {
		expect(morseToEnglish('.- -...')).toBe('ab');
	})

	test('should handle English to Morse conversion', () => {
		expect(englishToMorse('aA')).toBe('.- .-');
	})

	test("Should return a string", () => {
		expect(typeof englishToMorse('abc') === "string").toBe(true);
	});

	test('Character does not exist in the dictionary', () => {
		expect(morseToEnglish('......')).toBe('');
		expect(englishToMorse('#')).toBe('');
	  });
})																														