import React from 'react';
import './Timer.css';

const Timer = ({ hasStarted }) => {
	return <div>{hasStarted ? <p id='timer'></p> : <p id='timer'>00:10</p>}</div>;
};

export default Timer;
