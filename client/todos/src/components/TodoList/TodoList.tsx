import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { completeTodo, deleteTodo, editTodo } from '../../redux/Actions';
import { ITodoReducer } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
const TodoList = () => {
	const state = useSelector((state: ITodoReducer) => state.todoReducer);
	const dispatch = useDispatch();

	const changeTodo = (
		id: string,
		done: boolean,
		title: string,
		description: string
	) => {
		dispatch(editTodo(id, done, title, description));
	};

	const removeTodo = (id: string) => {
		dispatch(deleteTodo(id));
	};
	const doneTodo = (id: string, done: boolean) => {
		dispatch(completeTodo(id, done));
	};

	return (
		<TransitionGroup component='ul' className='list-group'>
			{state.todos.map(todo => (
				<CSSTransition timeout={800} classNames={'todo'} key={todo.id}>
					<TodoItem
						changeTodo={changeTodo}
						doneTodo={doneTodo}
						todo={todo}
						key={todo.id}
						deleteTodo={removeTodo}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};

export default TodoList;
