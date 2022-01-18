import React from 'react';
import { observer } from 'mobx-react';
import currentUserStore from '../stores/CurrentUser.store';
import userFromAPI from '../services/userFromAPI';

const DisplayUser = () => {
	const name = currentUserStore.currentUser.Name;
	const age = currentUserStore.currentUser.Age;
	const username = `${name}${age}`;

	if (name === null || name === '') {
		userFromAPI();
	}

	return (
		<>
			Welcome{' '}
			{name &&
				`${
					name.length > 10
						? name.charAt(0).toUpperCase() +
						  name.toLowerCase().slice(1, 10) +
						  age
						: username
				}`}
		</>
	);
};

const ObservedDisplayUserName = observer(DisplayUser);

const UserDetails = () => {
	return (
		<div className="username-container">
			<h1>
				<ObservedDisplayUserName />
			</h1>
		</div>
	);
};

export default UserDetails;
