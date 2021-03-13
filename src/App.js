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

	useEffect(() => {
		const randomWrd = () => words[Math.floor(Math.random() * words.length)];

		const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${randomWrd()}?key=${
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
	}, []);

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

	return (
		<div className='App'>
			<header className='App-header'>
				Welcome to Enrich-Vocab!
				<Funds funds={funds} />
				<h1>{mainWord ? mainWord[0].meta.id : null}</h1>
				<h3>{mainWord ? mainWord[0].shortdef[0] : null}</h3>
			</header>
			<div>
				{synonyms && antonyms ? (
					<Bills
						syns={synonyms}
						ants={antonyms}
						otherWrds={words}
						mainWord={mainWord[0].meta.id}
						calFunds={calFunds}
					/>
				) : null}
			</div>
		</div>
	);
}

export default App;
