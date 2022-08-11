import { useState } from "react";
import "./WordInput.css";

function WordInput(props) {
	let randomWord = ["random", "rescue", "junior", "welcome", "pizza"];

	let [word, setWord] = useState("Create your own Hangman");

	const handleChange1 = () => {
		if (document.getElementById("inputWord").hasAttribute("hidden")) {
			document.getElementById("inputWord").removeAttribute("hidden");
		}
	};

	const handleChange2 = () => {
		if (!document.getElementById("inputWord").hasAttribute("hidden")) {
			document.getElementById("inputWord").setAttribute("hidden", "");
			// let numbers = Math.floor(Math.random() * 10);
		}
		props.getRandomWord(randomWord[2]);
		const ell = document.getElementById("outter");
		ell.classList.remove("overlay");
	};

	function tester(event) {
		event.preventDefault();
		props.inputWord(event.target.input.value);
		document.getElementById("inputWord").reset();
		setWord("Create your own Hangman");
	}

	return (
		<>
			<h2>word Input</h2>
			{/* radio button */}
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
					onChange={handleChange1}
				/>
				<label className="form-check-label" htmlFor="flexRadioDefault1">
					User Input Word
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault2"
					onChange={handleChange2}
				/>
				<label className="form-check-label" htmlFor="flexRadioDefault2">
					Random Word
				</label>
			</div>
			{/* user word input form */}
			<form id="inputWord" className="mb-3" onSubmit={tester} hidden>
				<label className="form-label"></label>
				<input
					type="text"
					className="form-control"
					name=""
					id="input"
					aria-describedby="helpId"
					placeholder={word}
				/>

				<button type="submit" className="btn btn-primary" id="btnForm">
					Submit
				</button>
			</form>
		</>
	);
}

export default WordInput;
