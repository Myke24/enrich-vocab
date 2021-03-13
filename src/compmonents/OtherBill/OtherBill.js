import React, { useState } from 'react';

const OtherBill = ({ wrd, calFunds }) => {
	const [wrongTimes, setWrongTimes] = useState(0);
	const [display, setDisplay] = useState(true);

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
			) : null}
		</div>
	);
};

export default OtherBill;
