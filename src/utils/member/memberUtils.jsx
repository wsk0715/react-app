import { getRequest } from "../ajax/httpRequest";

async function loadMemberInfo(memberId, props) {
	try {
		const response = await getRequest(`/members/${ memberId }`);
		const member = response.result;
		for (let i = 0; i < props.length; i++) {
			const propName = props[i].state.name;
			if (member.hasOwnProperty(propName)) {
				props[i].state.set(member[propName]);
			}
		}
	} catch (e) {
		console.log(e)
	}
}

function isValid(properties) {
	let isValid = true;
	properties.forEach((prop) => {
		if (prop.message.value) {
			isValid = false;
		}
	});
	return isValid;
}

export { loadMemberInfo, isValid };
