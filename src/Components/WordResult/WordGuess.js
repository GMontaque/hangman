import "./WordGuess.css";

function WordGuess(props) {
	console.log("tree" + props.wordToGuess);

	let inputWordGuess = props.wordToGuess;
	let wordSplit = inputWordGuess.split("");

	console.log("split " + wordSplit);

	// let print;
	// for (let index = 0; index < wordSplit.length; index++) {
	// 	print = <p>{wordSplit[index]}</p>;
	// }

	return (
		<>
			<h2>word guess</h2>
			<div className="wordGrid">
				{wordSplit.map((letter) => (
					<p className="individualLetter" key={Math.random()}>
						{letter}
					</p>
				))}
			</div>
		</>
	);
}

export default WordGuess;
