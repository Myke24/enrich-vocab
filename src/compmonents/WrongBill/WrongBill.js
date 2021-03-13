import React, { useState } from 'react';

const WrongBill = ({ ant, calFunds }) => {
	const [wrongTimes, setWrongTimes] = useState(0);
	const [display, setDisplay] = useState(true);

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
			) : null}
		</div>
	);
};

export default WrongBill;
