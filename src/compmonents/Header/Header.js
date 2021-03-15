import React from 'react';
import Funds from '../Funds/Funds';
import Timer from '../Timer/Timer';
import './Header.css';

const Header = ({ funds, hasStarted, mainWord, stopGame }) => {
	return (
		<header className='App-header'>
			<Funds funds={funds} />
			<div className='greetingNTimer'>
				<h1>Welcome to Enrich-Vocab!</h1>
				<Timer hasStarted={hasStarted} />
			</div>
			<div className='mainWord'>
				<h1>{mainWord ? mainWord[0].meta.id : null}</h1>
				<h3>{mainWord ? mainWord[0].shortdef[0] : null}</h3>
			</div>

			{hasStarted ? (
				<button onClick={() => stopGame()}>Stop Game</button>
			) : null}
		</header>
	);
};

export default Header;
