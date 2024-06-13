import { getRequest } from "../httpRequest";

async function loadMemberInfo(memberId, setter) {
	try {
		const response = await getRequest(`/members/${ memberId }`);
		setter(response.result);
	} catch (e) {
		console.log(e)
	}
}

function handleInputChange(getter, setter, inputName) {
	return function (e) {
		const obj = {
			...getter,
			[inputName]: e.target.value,
		};
		setter(obj);
	};
}

export { loadMemberInfo, handleInputChange };
