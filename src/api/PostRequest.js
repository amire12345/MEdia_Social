import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getTimelinePosts = id => API.post(`/posts/${id}/timeline`);

export const signUp = formData => {
	API.post('/auth/register', formData);
};
