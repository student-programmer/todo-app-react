import React from 'react';
import {  useNavigate } from 'react-router-dom';
const Project = () => {
        const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate("/task")}>Задачи</button>
		</div>
	);
};

export default Project;
