import React, { useState } from 'react';
import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';

const Bills = ({ syns, ants, otherWrds, mainWord, calFunds }) => {
	let num = 1;
	return (
		<div>
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
			{/* {ants
				? ants.map((ant) => (
						<WrongBill ant={ant} key={ant} calFunds={calFunds} />
				  ))
				: null}
			{otherWrds.map((wrd) => {
				if (wrd !== mainWord) {
					return <OtherBill wrd={wrd} key={wrd} calFunds={calFunds} />;
				} else {
					return null;
				}
			})} */}
		</div>
	);
};

export default Bills;
