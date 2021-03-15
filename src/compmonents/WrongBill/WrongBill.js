import React, { useState } from 'react';
import './WrongBill.css';

const WrongBill = ({ ant, calFunds, isDisplayed }) => {
	const [display, setDisplay] = useState(isDisplayed);

	const handleClick = (ant) => {
		calFunds('wrong', ant);
		setDisplay(false);
	};
	return (
		<div className='bill' onClick={() => handleClick(ant)}>
			{display ? (
				<h3 id={ant} style={{ color: 'red' }}>
					{ant}
				</h3>
			) : (
				<h3 id={ant} style={{ color: 'red', display: 'none' }}>
					{ant}
				</h3>
			)}
		</div>
	);
};

export default WrongBill;
