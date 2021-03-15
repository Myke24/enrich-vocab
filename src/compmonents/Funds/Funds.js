import React from 'react';
import './Funds.css';

const Funds = ({ funds }) => {
	return (
		<div className='funds'>
			<h2>Funds</h2>
			<p>${funds}</p>
		</div>
	);
};

export default Funds;
