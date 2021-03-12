import React, { useState, useEffect } from 'react';
import './App.css';
import words from './words.json';
import Bill from './compmonents/Bill/Bill';

function App() {
	const [mainWord, setMainWord] = useState('');
	const [synonyms, setSynonyms] = useState(null);

	useEffect(() => {
		const randomWrd = () => words[Math.floor(Math.random() * words.length)];

		const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${randomWrd()}?key=${
			process.env.REACT_APP_COLLEGIATE_THESAURUS_API_KEY
		}`;

		fetch(url)
			.then((res) => res.json())
			.then((word) => {
				setMainWord(word);
				console.log(word);
				console.log(word[0].shortdef);

				setSynonyms(word[0].meta.syns[0]);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<div className='App'>
				<header className='App-header'>Welcome to Enrich-Vocab!</header>
			</div>
			<h1>{mainWord ? mainWord[0].meta.id : null}</h1>
			<h3>{mainWord ? mainWord[0].shortdef : null}</h3>
			<div>
				{synonyms
					? synonyms.map((syn) => {
							return <Bill syn={syn} key={syn} />;
					  })
					: null}
			</div>
		</>
	);
}

export default App;
