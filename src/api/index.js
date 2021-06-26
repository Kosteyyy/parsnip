import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';
const client = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export function fetchTasks() {
	return client.get('/tasks');
}

export function createTask(params) {
	return client.post('/tasks', params);
}

//post new version of task (edited task)
export function editTask(id, params) {
	return axios.put(`${API_BASE_URL}/tasks/${id}`, params);
}