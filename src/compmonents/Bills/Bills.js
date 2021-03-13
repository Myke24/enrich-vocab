import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';

//Bills will render the Bill components with a random millisecond number
//The Bill components will use the ms number to initiate a timer function
//	When that timer function completes the Bill components will execute the dismount function that was passed down from the Bills component
//	The dismount function will
//		set the calling Bill component's display value state to false
//		send it's id to Bills component so the Bills component can push that Bill's id to the quene array
//		then when that id is at the 0 index of the array the Bills component will shift that Bill and somehow use it to redisplay the bill with a new random millisecond and repeat until user loses or game timer runs out

const Bills = ({ syns, ants, otherWrds, mainWord, calFunds }) => {
	return (
		<div>
			{syns.map((syn) => (
				<CorrectBill syn={syn} key={syn} calFunds={calFunds} />
			))}
			{ants.map((ant) => (
				<WrongBill ant={ant} key={ant} calFunds={calFunds} />
			))}
			{otherWrds.map((wrd) => {
				if (wrd !== mainWord) {
					return <OtherBill wrd={wrd} key={wrd} calFunds={calFunds} />;
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Bills;
