const API_BASE_URL = 'https://textbooktracker.pythonanywhere.com';
const CONTENT_PATH = '/content';

export const getFromApi = async (path: string) => {
	console.log('Fetching', `${API_BASE_URL}${path}`);
	const response = await fetch(`${API_BASE_URL}${path}`);
	console.log('Response', response);
	return response.json();
};

export const getContent = async (path: string) => {
	return getFromApi(`${CONTENT_PATH}/${path}`);
};

export const getSections = async () => {
	return getContent('sections');
};
