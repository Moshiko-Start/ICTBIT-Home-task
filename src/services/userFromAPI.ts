import axios from 'axios';
import { storageService } from './storage-service';
import currentUserStore from '../stores/CurrentUser.store';
import UserModel from '../models/User.model';

const userFromAPI = async (): Promise<UserModel> => {
	const { data } = await axios.get('https://randomuser.me/api');

	const name: string = data.results[0].name.first;
	const age: number = data.results[0].dob.age;

	return { name, age } as UserModel;
};

export const saveFetchedUser = async () => {
	const user: UserModel = await userFromAPI();

	const name = user.name;
	const age = user.age;

	storageService.saveToStorage('name', name);
	storageService.saveToStorage('age', age);

	currentUserStore.setName(name);
	currentUserStore.setAge(age);
};

const checkIfLocalStorageEmpty =
	!storageService.loadFromStorage('name') &&
	!storageService.loadFromStorage('age')
		? true
		: false;

if (checkIfLocalStorageEmpty) {
	saveFetchedUser();
}

export default userFromAPI;
