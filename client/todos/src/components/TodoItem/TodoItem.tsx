import React from 'react';
import { ITodo } from '../../types/types';
import './TodoItem.css'
interface ITodoProps {
    todo: ITodo;
}
const TodoItem = ({ todo }: ITodoProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className=''>
                <span>{todo.title}</span>
            </div>
            <div>
                <button className='btn btn-primary button-todo-item'>Изменить</button>
                <button className='btn btn-success button-todo-item'>Завершить</button>
                <button className='btn btn-danger'>Удалить</button>
            </div>
        </li>
    );
};

export default TodoItem;
