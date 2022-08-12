import "./Alphabet.css";

function Alphabet(props) {
	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));
	function house(prop) {
		props.getLetterGuess(prop.target.innerText);
	}
	return (
		<>
			<h2>aplhabet</h2>
			<div className="AlphabetGrid">
				{alphabet.map((letter) => (
					<p className="letters" key={Math.random()} onClick={house}>
						{letter}
					</p>
				))}
			</div>
		</>
	);
}

export default Alphabet;
