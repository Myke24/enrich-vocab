import React from 'react';

const OtherBill = ({ wrd, calFunds }) => {
	return <h3 onClick={() => calFunds('other')}>{wrd}</h3>;
};

export default OtherBill;
