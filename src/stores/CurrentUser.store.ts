import UserModel from '../models/User.model';
import { storageService } from '../services/storage-service';

const nameFromLocalStorage = storageService.loadFromStorage('name');
const ageFromLocalStorage = storageService.loadFromStorage('age');

const initialName = nameFromLocalStorage ? nameFromLocalStorage : null;
const initialAge = ageFromLocalStorage ? ageFromLocalStorage : 0;

class CurrentUserStore {
	currentUser = new UserModel(initialName, initialAge);

	setName(name: string) {
		this.currentUser.Name = name;
	}

	setAge(age: number) {
		this.currentUser.Age = age;
	}
}

const currentUserStore = new CurrentUserStore();

export default currentUserStore;
