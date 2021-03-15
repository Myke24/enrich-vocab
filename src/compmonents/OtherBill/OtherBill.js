import React, { useState } from 'react';
import './OtherBill.css';

const OtherBill = ({ wrd, calFunds, isDisplayed }) => {
	const [display, setDisplay] = useState(isDisplayed);

	const handleClick = () => {
		calFunds('other', wrd);
		setDisplay(false);
	};
	return (
		<div className='bill' onClick={() => handleClick()}>
			{display ? <h3>{wrd}</h3> : <h3 style={{ display: 'none' }}>{wrd}</h3>}
		</div>
	);
};

export default OtherBill;
