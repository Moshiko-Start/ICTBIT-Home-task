function saveToStorage(key: string, val: string | number) {
	localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key: string) {
	return JSON.parse(localStorage.getItem(key) as string);
}

function removeFromStorage(key: string) {
	localStorage.removeItem(key);
}

export const storageService = {
	saveToStorage,
	loadFromStorage,
	removeFromStorage,
};
