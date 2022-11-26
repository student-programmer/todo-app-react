import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
			<header className='todo-header'>
				<div className='container pt-3 pb-3'>
					<h1 className='logo' onClick={() => navigate('/')}>Todo App</h1>
				</div>
			</header>
		);
};

export default Header;
