import React, { useState } from 'react';
import './CorrectBill.css';

const CorrectBill = ({ syn, calFunds, isDisplayed, ele }) => {
	const [display, setDisplay] = useState(isDisplayed);
	const correctModal = document.createElement('div');
	correctModal.innerHTML = `<div style={{position:'absolute', color : 'red', font-size: '5rem'}}>+100</div>`;

	const handleClick = () => {
		calFunds('correct', syn);
		//add the dissappear class to the bill then when it ends it's display goes away
		let element = document.querySelector(`#${ele}`);
		element.appendChild(correctModal);
		setDisplay(false);
	};

	return (
		<div id={ele} onClick={() => handleClick()}>
			{display ? (
				<div className='bill'>
					<span className='firstc'>100</span>
					<span className='secondc'>100</span>
					<h3 className='word'>{syn}</h3>
					<span className='thirdc'>100</span>
					<span className='fourthc'>100</span>
				</div>
			) : (
				<h3 style={{ display: 'none' }}>{syn}</h3>
			)}
		</div>
	);
};

export default CorrectBill;
