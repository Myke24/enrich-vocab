import React, { useState, useEffect } from 'react';
import './App.css';
import words from './words.json';
import Header from './compmonents/Header/Header';
import Bills from './compmonents/Bills/Bills';
import Results from './compmonents/Results/Results';

function App() {
	const [mainWord, setMainWord] = useState('');
	const [synonyms, setSynonyms] = useState(null);
	const [antonyms, setAntonyms] = useState(null);
	const [funds, setFunds] = useState(300);
	const [userAnswers, setUserAnswers] = useState([]);
	const [hasStarted, setHasStarted] = useState(false);
	const [generateWrds, setGeneratWrds] = useState(null);
	const [displayingSyns, setDisplayingSyns] = useState([]);
	const [displayingAnts, setDisplayingAnts] = useState([]);
	const [displayingWrds, setDisplayingWrds] = useState([]);
	const [hasLost, setHasLost] = useState(false);
	const [getNewWord, setGetNewWord] = useState(false);

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

		//make sure that the word has at least 3 synonyms and the word is actually in the collegiate thesaurus
		if (
			synonyms === undefined ||
			synonyms.length < 3 ||
			mainWord[0].meta.id === undefined
		) {
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
	}, [getNewWord]);

	//--------------------GAME STUFF--------------------------------------------
	const calFunds = (calculate, word) => {
		if (funds <= 0) {
			stopGame();
		}
		switch (calculate) {
			case 'correct':
				setFunds(funds + 100);
				break;
			case 'wrong':
				setFunds(funds - 100);
				setUserAnswers([...userAnswers, word]);
				break;
			default:
				setFunds(funds - 50);
				setUserAnswers([...userAnswers, word]);
		}
	};

	//takes in 3 arrays of words(strings) and picks 20 random words, === 3 syns, up to 3 ants if the main word has any and the rest of the 20 words gets filled with random words from the words json list
	const getRandWrds = (syns, ants, wrds) => {
		setDisplayingSyns([]);
		let randomSyns = [];
		let synsLength = syns.length;
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		randomSyns.push(syns[Math.floor(Math.random() * synsLength)]);
		setDisplayingSyns(randomSyns);
		setAntonyms([]);
		if (ants) {
			let randomAnts = [];
			let antsLength = ants.length;
			for (let x = 0; x < 3; x++) {
				if (ants[x] !== undefined) {
					randomAnts.push(ants[Math.floor(Math.random() * antsLength)]);
				}
			}
			setDisplayingAnts(randomAnts);
			setDisplayingWrds([]);
			let remaining = 20 - (randomAnts.length + 3);
			let randomWrds = [];
			let wrdsLength = wrds.length;
			for (let x = 0; x < remaining; x++) {
				randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
			}
			setDisplayingWrds(randomWrds);
		} else {
			setAntonyms([]);
			setDisplayingWrds([]);
			let randomWrds = [];
			let wrdsLength = wrds.length;
			for (let x = 1; x < 17; x++) {
				randomWrds.push(wrds[Math.floor(Math.random() * wrdsLength)]);
			}
			setDisplayingWrds(randomWrds);
		}
	};

	const startGame = () => {
		setHasStarted(true);
		setHasLost(false);
		setUserAnswers([]);
		if (funds !== 300) {
			setFunds(300);
		}
		//``````````````````TODO``````````````````````````````````````````|
		//---------------Create Timer here???????-----------------------
		let randInterval = Math.floor(Math.random() * (3000 - 2000 + 1)) + 1000;
		setGeneratWrds(
			setInterval(() => {
				getRandWrds(synonyms, antonyms, words);
			}, randInterval)
		);
	};
	function stopGame() {
		setGetNewWord(getNewWord === true ? false : true);
		setHasStarted(false);
		setMainWord('');
		setSynonyms(null);
		setAntonyms(null);
		if (funds <= 0) {
			setHasLost(true);
		}
		clearInterval(generateWrds);
	}

	//--------------------------------RENDERING-----------------------------------|
	return (
		<div className='App'>
			{hasLost ? (
				<Results userAnswers={userAnswers} startGame={startGame} />
			) : (
				<>
					<Header
						funds={funds}
						hasStarted={hasStarted}
						mainWord={mainWord}
						stopGame={stopGame}
					/>
					<div>
						{hasStarted ? (
							synonyms ? (
								<Bills
									syns={displayingSyns}
									ants={displayingAnts}
									otherWrds={displayingWrds}
									mainWord={mainWord[0].meta.id}
									calFunds={calFunds}
									funds={funds}
								/>
							) : (
								<h1>No Synonyms</h1>
							)
						) : (
							<button onClick={() => startGame()}>Start Game</button>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
