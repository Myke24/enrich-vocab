import React from 'react';

const CorrectBill = ({ syn, calFunds }) => {
	return (
		<h3 onClick={() => calFunds('correct')} style={{ color: 'green' }}>
			{syn}
		</h3>
	);
};

export default CorrectBill;
