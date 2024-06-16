import api from './axiosApi';

export const getRequest = async (url, params = {}) => {
	try {
		const response = await api.get(url, { params });
		return response.data;
	} catch (error) {
		console.error('GET 요청 실패:', error);
		throw error;
	}
};

export const postRequest = async (url, data) => {
	try {
		const response = await api.post(url, data);
		return response.data;
	} catch (error) {
		console.error('POST 요청 실패:', error);
		throw error;
	}
};

export const putRequest = async (url, data) => {
	try {
		const response = await api.put(url, data);
		return response.data;
	} catch (error) {
		console.error('PUT 요청 실패:', error);
		throw error;
	}
};

export const patchRequest = async (url, data) => {
	try {
		const response = await api.patch(url, data);
		return response.data;
	} catch (error) {
		console.error('PATCH 요청 실패:', error);
		throw error;
	}
};

export const deleteRequest = async (url) => {
	try {
		const response = await api.delete(url);
		return response.data;
	} catch (error) {
		console.error('DELETE 요청 실패:', error);
		throw error;
	}
};
