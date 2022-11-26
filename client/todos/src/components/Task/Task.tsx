import React from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const Task = () => {
  return (
		<main>
			<section>
				<div className='container pt-3'>
					<TodoForm />
					<h2>Новые дела</h2>
					<TodoList />
				</div>
			</section>
		</main>
	);
}

export default Task