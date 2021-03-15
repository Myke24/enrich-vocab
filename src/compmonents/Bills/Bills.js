import React from 'react';
import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';
import './Bills.css';

const Bills = ({ syns, ants, otherWrds, mainWord, calFunds }) => {
	let num = 1;
	return (
		<div className='billsZone'>
			{syns
				? syns.map((syn) => (
						<CorrectBill
							syn={syn}
							key={`${syn}${num++}`}
							calFunds={calFunds}
							isDisplayed={true}
						/>
				  ))
				: null}
			{ants
				? ants.map((ant) => (
						<WrongBill
							ant={ant}
							key={`${ant}${num++}`}
							calFunds={calFunds}
							isDisplayed={true}
						/>
				  ))
				: null}
			{otherWrds
				? otherWrds.map((wrd) => (
						<OtherBill
							wrd={wrd}
							key={`${wrd}${num++}`}
							calFunds={calFunds}
							isDisplayed={true}
						/>
				  ))
				: null}
		</div>
	);
};

export default Bills;
