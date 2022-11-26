import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import AppRouter from './components/Router/AppRouter';
import Task from './components/Task/Task';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { getTodos } from './redux/Actions';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    return (
			<BrowserRouter>
				<div>
					<Header />
					<AppRouter />
					{/* <Task/> */}
				</div>
			</BrowserRouter>
		);
}

export default App;
