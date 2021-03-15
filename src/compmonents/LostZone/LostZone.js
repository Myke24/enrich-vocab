import React from 'react';

const LostZone = ({ userAnswers, startGame }) => {
	const ansObj = userAnswers.reduce((count, wrd) => {
		if (count[wrd] === undefined) {
			count[wrd] = 1;
		} else {
			count[wrd]++;
		}
		return count;
	}, {});
	const ansArr = [];

	for (let ans in ansObj) {
		ansArr.push(
			<div key={ans}>
				<span>
					{ans} ---- {ansObj[ans]}
				</span>
			</div>
		);
	}

	//``````````````TODO```````````````````````|
	//Fetch the definitions for each wrong word

	return (
		<div>
			<button onClick={() => startGame()}> Play Again?</button>
			<div>{ansArr}</div>
		</div>
	);
};

export default LostZone;
