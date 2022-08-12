// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/TitleText/TitleText";
import Hangman from "./Components/Hangman/HangmanFig";
import Alphabet from "./Components/Letters/Alphabet";
import WordGuess from "./Components/WordResult/WordGuess";
import { useState } from "react";
import WordInput from "./Components/Words/WordInput";

function App() {
	// result of user guessing a letter
	let [GuessLetter, SetGuessLetter] = useState("");

	let guessedLetter = (e) => SetGuessLetter(e);

	// return value of user inputing a word to guess
	let [userWord, setUserWord] = useState("");

	let userInputWord = (e) => setUserWord(e);

	// confirm random word to use
	let [randomWord, setRandomWord] = useState("");

	let userRandomWord = (e) => {
		setRandomWord(e);
	};

	// console.log(GuessLetter, userWord, randomWord);
	return (
		<>
			<Header></Header>
			<WordInput
				inputWord={userInputWord}
				getRandomWord={userRandomWord}
			></WordInput>

			<div className="row overlay" id="outter">
				<div className="col-md-6 ">
					<Hangman></Hangman>
				</div>
				<div className="col-md-6 ">
					<Alphabet getLetterGuess={guessedLetter}></Alphabet>
				</div>
			</div>
			<div className="row">
				<WordGuess
					RandomwordToGuess={randomWord}
					userInputWordGuess={userWord}
					letterGuess={GuessLetter}
				></WordGuess>
			</div>
		</>
	);
}

export default App;
