import React, { useState } from 'react';
import { storageService } from '../services/storage-service';
import currentUserStore from '../stores/CurrentUser.store';
import { saveFetchedUser } from '../services/userFromAPI';

const initialName: string =
	currentUserStore.currentUser.Name || 'Please Enter Name';

const initialAge: any = currentUserStore.currentUser.Age || 'Please Enter Age';

const EditUser = () => {
	const [user, setUser] = useState({
		name: initialName,
		age: initialAge,
	});

	const handleChange = (e: any) => {
		const name: string = e.target.name;
		const value: any = e.target.value;

		setUser({ ...user, [name]: value });

		if (name === 'name' && name.match('^[a-zA-Z ]*$') && value.length > 1) {
			storageService.saveToStorage(name, value);
			currentUserStore.setName(value);
		}
		if (name === 'age' && value.length > 0) {
			storageService.saveToStorage(name, +value);
			currentUserStore.setAge(+value);
		}
	};

	const generateNewUser = async () => {
		await saveFetchedUser();
		setUser({
			...user,
			name: currentUserStore.currentUser.Name,
			age: currentUserStore.currentUser.Age,
		});
	};

	const clearInfo = () => {
		storageService.removeFromStorage('name');
		storageService.removeFromStorage('age');
		currentUserStore.setName('');
		currentUserStore.setAge(0);
		setUser({
			name: currentUserStore.currentUser.Name,
			age: currentUserStore.currentUser.Age,
		});
	};

	return (
		<div className="edit-user-container">
			<form className="form">
				<div className="form-control">
					<label htmlFor="name">Name :</label>
					<input
						type="text"
						name="name"
						value={
							user.name !== 'Please Enter Name' ? user.name : ''
						}
						placeholder={user.name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="age">Age :</label>
					<input
						type="number"
						name="age"
						value={user.age}
						placeholder={user.age}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="btns-container">
					<button
						type="button"
						onClick={generateNewUser}
						className="btn generate-btn"
					>
						Generate New User
					</button>
					<button
						type="button"
						onClick={clearInfo}
						className="btn clear-btn"
					>
						Clear User Details
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditUser;
