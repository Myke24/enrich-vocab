import React, { useState, useEffect } from 'react';
import './App.css';
import words from './words.json';
import Funds from './compmonents/Funds/Funds';
import Bills from './compmonents/Bills/Bills';

function App() {
	const [mainWord, setMainWord] = useState('');
	const [synonyms, setSynonyms] = useState(null);
	const [antonyms, setAntonyms] = useState(null);
	const [funds, setFunds] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [hasStarted, setHasStarted] = useState(false);
	const [generateSyns, setGeneratSyns] = useState(null);
	const [displayingSyns, setDisplayingSyns] = useState([]);

	//-----------------------------SETUP------------------------------------
	const fetchWords = () => {
		const randomWrd = () => words[Math.floor(Math.random() * words.length)];

		let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${randomWrd()}?key=${
			process.env.REACT_APP_COLLEGIATE_THESAURUS_API_KEY
		}`;

		fetch(url)
			.then((res) => res.json())
			.then((word) => {
				setMainWord(word);
				setSynonyms(word[0].meta.syns[0]);
				setAntonyms(word[0].meta.ants[0]);
			})
			.catch(console.error);

		if (synonyms === undefined || synonyms.length < 3) {
			fetchWords();
		}
	};

	useEffect(() => {
		const randomWrd = () => words[Math.floor(Math.random() * words.length)];

		let url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${randomWrd()}?key=${
			process.env.REACT_APP_COLLEGIATE_THESAURUS_API_KEY
		}`;

		fetch(url)
			.then((res) => res.json())
			.then((word) => {
				setMainWord(word);
				setSynonyms(word[0].meta.syns[0]);
				setAntonyms(word[0].meta.ants[0]);
			})
			.catch(console.error);

		if (synonyms === undefined) {
			fetchWords();
		}
	}, []);

	//--------------------GAME STUFF--------------------------------------------
	const calFunds = (calculate, word, wrongTimes) => {
		if (calculate === 'correct') {
			setFunds(funds + 100);
			setUserAnswers({ ...userAnswers, [word]: wrongTimes });
		} else if (calculate === 'wrong') {
			setFunds(funds - 100);
			setUserAnswers({ ...userAnswers, [word]: wrongTimes });
		} else {
			setFunds(funds - 50);
			setUserAnswers({ ...userAnswers, [word]: wrongTimes });
		}
	};

	const getRandWrds = (wrds) => {
		setDisplayingSyns(null);
		let randomWrds = [];
		let wrdsLength = wrds.length;
		randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
		randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
		randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
		setDisplayingSyns(randomWrds);
	};

	const startGame = () => {
		setHasStarted(true);
		setGeneratSyns(
			setInterval(() => {
				getRandWrds(synonyms);
			}, 2000)
		);
	};
	const stopGame = () => {
		setHasStarted(false);
		clearInterval(generateSyns);
	};

	//--------------------------------RENDERING-----------------------------------|
	return (
		<div className='App'>
			<header className='App-header'>
				Welcome to Enrich-Vocab!
				<Funds funds={funds} />
				<h1>{mainWord ? mainWord[0].meta.id : null}</h1>
				<h3>{mainWord ? mainWord[0].shortdef[0] : null}</h3>
				{hasStarted ? (
					<button onClick={() => stopGame()}>Stop Game</button>
				) : null}
			</header>
			<div>
				{hasStarted ? (
					synonyms ? (
						<Bills
							syns={displayingSyns}
							ants={antonyms}
							otherWrds={words}
							mainWord={mainWord[0].meta.id}
							calFunds={calFunds}
						/>
					) : (
						<h1>No Synonyms</h1>
					)
				) : (
					<button onClick={() => startGame()}>Start Game</button>
				)}
			</div>
		</div>
	);
}

export default App;
