import React from 'react';
import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';

const Bills = ({ syns, ants }) => {
	return (
		<div>
			{syns.map((syn) => (
				<CorrectBill syn={syn} key={syn} />
			))}
			{ants.map((ant) => (
				<WrongBill ant={ant} key={ant} />
			))}
		</div>
	);
};

export default Bills;
