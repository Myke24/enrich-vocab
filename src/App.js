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
	const [generateWrds, setGeneratWrds] = useState(null);
	const [displayingSyns, setDisplayingSyns] = useState([]);
	const [displayingAnts, setDisplayingAnts] = useState([]);
	const [displayingWrds, setDisplayingWrds] = useState([]);

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

	const getRandWrds = (syns, ants, wrds) => {
		setDisplayingSyns([]);
		console.log('displaying syns ' + displayingSyns);
		let randomSyns = [];
		let synsLength = syns.length;
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		setDisplayingSyns(randomSyns);
		console.log('displaying syns ' + displayingSyns);
		setAntonyms([]);
		if (ants) {
			console.log('ants is defined');
			console.log(ants.length);
			let randomAnts = [];
			let antsLength = ants.length;
			for (let x = 0; x < 3; x++) {
				if (ants[x] !== undefined) {
					randomAnts.push(ants[Math.floor(Math.random() * antsLength)]);
				}
			}
			setDisplayingAnts(randomAnts);
			console.log(randomAnts);
			console.log(
				'after set display ants before diplay words if ants is defined'
			);
			setDisplayingWrds([]);
			let remaining = 10 - (randomAnts.length + randomSyns.length);
			console.log(remaining);
			let randomWrds = [];
			let wrdsLength = wrds.length;
			console.log(wrds.length);
			for (let x = 0; x < remaining; x++) {
				randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
			}
			console.log(randomWrds);
			setDisplayingWrds(randomWrds);
		} else {
			console.log('ants is not defined');
			setDisplayingWrds([]);
			let remaining = 10 - randomSyns.length;
			let randomWrds = [];
			let wrdsLength = wrds.length;
			for (let x = 0; x < remaining; x++) {
				randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
			}
			console.log(remaining);
			setDisplayingWrds(randomWrds);
			console.log(randomWrds);
		}
	};

	const startGame = () => {
		setHasStarted(true);
		let randInterval = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
		setGeneratWrds(
			setInterval(() => {
				getRandWrds(synonyms, antonyms, words);
			}, randInterval)
		);
	};
	const stopGame = () => {
		setHasStarted(false);
		clearInterval(generateWrds);
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
							ants={displayingAnts}
							otherWrds={displayingWrds}
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
