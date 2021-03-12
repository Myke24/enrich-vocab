import React from 'react';

const WrongBill = ({ ant, calFunds }) => {
	return (
		<h3 onClick={() => calFunds('wrong')} style={{ color: 'red' }}>
			{ant}
		</h3>
	);
};

export default WrongBill;
