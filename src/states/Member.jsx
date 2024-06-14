import { useState } from "react";

export default function Member() {
	const state = {
		properties: [
			Property('memberId', '아이디', '를'),
			Property('memberPw', '비밀번호', '를'),
			Property('memberName', '이름', '을'),
			Property('memberEmail', '이메일', '을'),
		],
		getObject: function () {
			const member = {
				memberId: this.properties[0].state.value,
				memberPw: this.properties[1].state.value,
				memberName: this.properties[2].state.value,
				memberEmail: this.properties[3].state.value,
			}
			return member;
		},
	};
	return state;
}

function Property(name, displayName, postfix) {
	const state = State(name);
	const message = State('message');
	const inputChangeHandler = (event) => {
		const value = event.target.value;
		state.set(value);
	};

	const obj = {
		state,
		message,
		displayName,
		postfix,
		inputChangeHandler,
	};
	return obj;
}

function State(name) {
	const state = useState('');
	const obj = {
		name: name,
		value: state[0],
		set: function (value) {
			state[1](value);
		}
	}
	return obj;
}
