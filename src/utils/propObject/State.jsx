import { useState } from "react";

const State = (name) => {
	const state = useState('');

	return {
		name: name,
		value: state[0],  // getter
		set: (value) => {
			state[1](value);  // setter
		}
	}
}

export default State;
