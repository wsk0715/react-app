import api from './axiosApi';

const request = async (url, method, data = {}, params = {}) => {
	try {
		const config = {
			url,
			method,
			...(method === 'get' ? { params } : { data }),
		};
		const response = await api(config);
		return response.data;
	} catch (error) {
		console.log(`${ method.toUpperCase() } 요청 실패: `, error);
		throw error;
	}
}

const getRequest = (url, params) => request(url, 'get', {}, params);
const postRequest = (url, data) => request(url, 'post', data);
const putRequest = (url, data) => request(url, 'put', data);
const patchRequest = (url, data) => request(url, 'patch', data);
const deleteRequest = (url) => request(url, 'delete');

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
