import State from "./State";

const Property = (name, displayName, postfixObject, postfixSubject, maxLength) => {
	const state = State(name);
	const message = State('message');

	const actions = {
		inputChangeHandler: (event) => {
			const value = event.target.value;
			state.set(value);
		},
		inputBlurHandler: () => {
			if (!state.value) {
				message.set(`${ displayName + postfixObject } 입력해주세요.`);
				return;
			}
			if (state.value.length > maxLength) {
				message.set(`${ displayName + postfixSubject } 최대 ${ maxLength }자까지 입력 가능합니다.`);
				return;
			}
			message.set('');
		},
	};

	return {
		state,
		message,
		displayName,
		postfixObject,
		postfixSubject,
		maxLength,
		actions,
	};
}

export default Property;
