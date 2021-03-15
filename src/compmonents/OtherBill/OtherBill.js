import React, { useState } from 'react';
import './OtherBill.css';

const OtherBill = ({ wrd, calFunds, isDisplayed, ele }) => {
	const [display, setDisplay] = useState(isDisplayed);
	const otherModal = document.createElement('div');
	otherModal.innerHTML = `<div style={{position:'absolute', color : 'red', font-size: '5rem'}}>-50</div>`;

	const handleClick = (e) => {
		calFunds('other', wrd);
		let element = document.querySelector(`#${ele}`);
		element.appendChild(otherModal);

		setDisplay(false);
	};
	return (
		<div id={ele} onClick={(e) => handleClick(e)}>
			{display ? (
				<div className='bill'>
					<span className='firstc'>100</span>
					<span className='secondc'>100</span>
					<h3 className='word'>{wrd}</h3>
					<span className='thirdc'>100</span>
					<span className='fourthc'>100</span>
				</div>
			) : (
				<h3 style={{ display: 'none' }}>{wrd}</h3>
			)}
		</div>
	);
};

export default OtherBill;
