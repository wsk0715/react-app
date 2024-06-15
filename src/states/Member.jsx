import { useState } from "react";

export default function Member() {
	const state = {
		properties: [
			Property('memberId', '아이디', '를', '는', 20),
			Property('memberPw', '비밀번호', '를', '는', 100),
			Property('memberName', '이름', '을', '은', 10),
			Property('memberEmail', '이메일', '을', '은', 20),
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

function Property(name, displayName, postfix, postfix2, maxLength) {
	const state = State(name);
	const message = State('message');
	const inputChangeHandler = (event) => {
		const value = event.target.value;
		state.set(value);
	};
	const inputBlurHandler = (event) => {
		if (!state.value) {
			message.set(`${ displayName + postfix } 입력해주세요.`);
			return;
		}
		if (state.value.length > maxLength) {
			message.set(`${ displayName + postfix2 } 최대 ${ maxLength }자까지 입력 가능합니다.`);
			return;
		}
		message.set('');
	}

	const obj = {
		state,
		message,
		displayName,
		postfix,
		postfix2,
		maxLength,
		inputChangeHandler,
		inputBlurHandler,
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
