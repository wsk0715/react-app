import { getRequest } from "../httpRequest";

async function loadMemberInfo(memberId, setter) {
	try {
		const response = await getRequest(`/members/${ memberId }`);
		setter(response.result);
	} catch (e) {
		console.log(e)
	}
}


export { loadMemberInfo };
