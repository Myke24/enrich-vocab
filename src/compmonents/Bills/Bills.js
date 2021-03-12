import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';

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
