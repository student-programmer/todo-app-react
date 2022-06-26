import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ITodoReducer } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import "./TodoList.css"
const TodoList = () => {
    const state = useSelector((state: ITodoReducer) => state.todoReducer);
    console.log(state)
    return (
        <TransitionGroup component='ul' className='list-group'>
            {state.todos.map((todo) => (
                <CSSTransition timeout={800} classNames={'todo'} key={todo.id}>
                    <TodoItem todo={todo} key={todo.id}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TodoList;
