import React, { useState } from 'react';

const CorrectBill = ({ syn, calFunds }) => {
	const [wrongTimes, setWrongTimes] = useState(0);
	const [display, setDisplay] = useState(true);

	const handleClick = () => {
		setWrongTimes(wrongTimes - 1);
		calFunds('correct', syn, wrongTimes);
		setDisplay(false);
	};

	return (
		<div>
			{display ? (
				<h3 onClick={() => handleClick()} style={{ color: 'green' }}>
					{syn}, {wrongTimes}
				</h3>
			) : (
				<h3
					onClick={() => handleClick()}
					style={{ color: 'green', display: 'none' }}>
					{syn}, {wrongTimes}
				</h3>
			)}
		</div>
	);
};

export default CorrectBill;
