import React, { useState } from 'react';

const WrongBill = ({ ant, calFunds, isDisplayed }) => {
	const [wrongTimes, setWrongTimes] = useState(0);
	const [display, setDisplay] = useState(isDisplayed);

	const handleClick = () => {
		setWrongTimes(wrongTimes + 1);
		calFunds('wrong', ant, wrongTimes);
		setDisplay(false);
	};
	return (
		<div>
			{display ? (
				<h3 id={ant} onClick={() => handleClick()} style={{ color: 'red' }}>
					{ant}, {wrongTimes}
				</h3>
			) : (
				<h3
					id={ant}
					onClick={() => handleClick()}
					style={{ color: 'red', display: 'none' }}>
					{ant}, {wrongTimes}
				</h3>
			)}
		</div>
	);
};

export default WrongBill;
