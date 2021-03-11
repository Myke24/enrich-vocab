import './App.css';

const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=${process.env.REACT_APP_COLLEGIATE_THESAURUS_API_KEY}`;

function App() {
	// Use the url as normal in your request
	fetch(url)
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);
	return (
		<div className='App'>
			<header className='App-header'>Welcome to Enrich-Vocab!</header>
		</div>
	);
}

export default App;
