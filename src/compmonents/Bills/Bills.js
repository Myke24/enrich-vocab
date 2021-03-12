import CorrectBill from '../CorrectBill/CorrectBill';
import WrongBill from '../WrongBill/WrongBill';
import OtherBill from '../OtherBill/OtherBill';

const Bills = ({ syns, ants, otherWrds, mainWord }) => {
	return (
		<div>
			{syns.map((syn) => (
				<CorrectBill syn={syn} key={syn} />
			))}
			{ants.map((ant) => (
				<WrongBill ant={ant} key={ant} />
			))}
			{otherWrds.map((wrd) => {
				if (wrd !== mainWord) {
					return <OtherBill wrd={wrd} key={wrd} />;
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Bills;
