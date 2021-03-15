import React, { useState } from 'react';
import './WrongBill.css';

const WrongBill = ({ ant, calFunds, isDisplayed, ele }) => {
	const [display, setDisplay] = useState(isDisplayed);
	const wrongModal = document.createElement('div');
	wrongModal.innerHTML = `<div style={{position:'absolute', color : 'red', font-size: '5rem'}}>-100</div>`;

	const handleClick = (ant) => {
		calFunds('wrong', ant);
		let element = document.querySelector(`#${ele}`);
		element.appendChild(wrongModal);
		setDisplay(false);
	};
	return (
		<div id={ele} onClick={() => handleClick()}>
			{display ? (
				<div className='bill'>
					<span className='firstc'>100</span>
					<span className='secondc'>100</span>
					<h3 id={ant} className='word'>
						{ant}
					</h3>
					<span className='thirdc'>100</span>
					<span className='fourthc'>100</span>
				</div>
			) : (
				<h3 id={ant} style={{ display: 'none' }}>
					{ant}
				</h3>
			)}
		</div>
	);
};

export default WrongBill;
