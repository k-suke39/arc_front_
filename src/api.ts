import { Hello } from './types';

export const getAllTodos = async (): Promise<Hello> => {
	const res = await fetch('https://activerecorder-back.onrender.com/', {
		cache: 'no-store',
	});

	if (!res.ok) {
		console.error(`Error: ${res.status}`);
	}

	let text;
	try {
		text = await res.json();
	} catch (error) {
		console.error('Failed to parse JSON:', error);
	}
	return text;
};
