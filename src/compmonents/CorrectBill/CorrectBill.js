import React, { useState } from 'react';
import './CorrectBill.css';

const CorrectBill = ({ syn, calFunds, isDisplayed }) => {
	const [display, setDisplay] = useState(isDisplayed);

	const handleClick = () => {
		calFunds('correct', syn);
		setDisplay(false);
	};

	return (
		<div className='bill' onClick={() => handleClick()}>
			{display ? (
				<h3 style={{ color: 'green' }}>{syn}</h3>
			) : (
				<h3 style={{ color: 'green', display: 'none' }}>{syn}</h3>
			)}
		</div>
	);
};

export default CorrectBill;
