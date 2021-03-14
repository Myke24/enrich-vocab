import React, { useState } from 'react';

const OtherBill = ({ wrd, calFunds, isDisplayed }) => {
	const [wrongTimes, setWrongTimes] = useState(0);
	const [display, setDisplay] = useState(isDisplayed);

	const handleClick = () => {
		setWrongTimes(wrongTimes + 1);
		calFunds('other', wrd, wrongTimes);
		setDisplay(false);
	};
	return (
		<div>
			{display ? (
				<h3 onClick={() => handleClick()}>
					{wrd}, {wrongTimes}
				</h3>
			) : (
				<h3 onClick={() => handleClick()} style={{ display: 'none' }}>
					{wrd}, {wrongTimes}
				</h3>
			)}
		</div>
	);
};

export default OtherBill;
