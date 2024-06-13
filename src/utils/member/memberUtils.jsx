import { getRequest } from "../httpRequest";

export async function getMemberInfo(setMember, memberId) {
	try {
		const response = await getRequest(`/members/${ memberId }`);
		setMember(response.result);
	} catch (e) {
		console.log(e)
	}
}
