import React from 'react';
import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';
import './Bills.css';

const Bills = ({ syns, ants, otherWrds, mainWord, calFunds, funds }) => {
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
							ele={`${syn}${num++}`}
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
							ele={`${ant}${num++}`}
						/>
				  ))
				: null}
			{otherWrds
				? otherWrds
						.filter((wrd) => wrd !== mainWord)
						.map((wrd) => (
							<OtherBill
								wrd={wrd}
								key={`${wrd}${num++}`}
								calFunds={calFunds}
								isDisplayed={true}
								ele={`${wrd}${num++}`}
							/>
						))
				: null}
		</div>
	);
};

export default Bills;
