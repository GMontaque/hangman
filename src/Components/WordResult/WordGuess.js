// import { useState } from "react";
import "./WordGuess.css";

function WordGuess(props) {
	let letterGuessed = props.letterGuess;
	let randomWord = props.RandomwordToGuess;
	let userWord = props.userInputWordGuess;
	let randomWordSplit = randomWord.split("");
	let userWordSplit = userWord.split("");

	console.log("random word, " + randomWord);
	console.log("user input word, " + userWord);
	console.log("letter guess, " + letterGuessed);

	console.log(randomWord.search("e"));

	let letterSpaces = [];
	for (let index = 0; index < randomWordSplit.length; index++) {
		letterSpaces = randomWordSplit.map((x) => "_");
	}

	for (let index = 0; index < userWordSplit.length; index++) {
		letterSpaces = userWordSplit.map((x) => "_");
	}

	return (
		<>
			<h2>word guess</h2>
			<div className="wordGrid">
				{/* {exampleWord.map((letter) => (
					<p className="individualLetter" key={Math.random()}>
						{letter}
					</p>
				))} */}
				{letterSpaces.map((letter) => (
					<p className="individualLetter" key={Math.random()}>
						{letter}
					</p>
				))}
			</div>
		</>
	);
}

export default WordGuess;
