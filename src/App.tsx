import React from 'react';
import DisplayUser from './cmps/DisplayUser';
import EditUser from './cmps/EditUser';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<div className="area">
				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<DisplayUser />
					<EditUser />
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default App;
