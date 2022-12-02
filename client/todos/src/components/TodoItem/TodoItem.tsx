import React, { ChangeEvent, useState } from 'react';
import { ITodo } from '../../types/types';
import './TodoItem.css';
interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0: string, arg1: boolean) => void;
    changeTodo: (
        arg0: string,
        arg1: boolean,
        arg2: string,
        arg3: string
    ) => void;
}
const TodoItem = ({ todo, deleteTodo, doneTodo, changeTodo }: ITodoProps) => {
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);

    const [isTodoEdit, setIsTodoEdit] = useState(false);
    const [isTodoEditDescription, setIsTodoEditDescription] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const createDate = todo.creationDate.toString();
    const updateDate = todo.updatedOn.toString();

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(todo.id, todo.done, newTitle, newDescription);
            setIsTodoEdit(!isTodoEdit);
            setIsTodoEditDescription(!isTodoEditDescription);
        }
    };
    const handleTodoEdit = () => {
        setIsTodoEdit(!isTodoEdit);
        setIsTodoEditDescription(!isTodoEditDescription);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDescription(event.target.value);
    };

    return (
        // <li className={ `todo-item list-group-item d-flex justify-content-between align-items-center list-my ${todo.done ? 'list-group-item-success' : ''}`}>
        <li
            className={`todo-item list-group-item  list-my ${
                todo.done ? 'list-group-item-success' : ''
            }`}
        >
            <div
                className={'d-flex justify-content-between align-items-center '}
            >
                <span className='number_todo'>№{todo.id}</span>
                <div onKeyPress={handleSubmit} className='todo-text'>
                    {isTodoEdit ? (
                        <input type='text' onChange={handleTitleChange} />
                    ) : (
                        <span className={`${todo.done ? 'title-done' : ''}`}>
                            {todo.title}
                        </span>
                    )}
                </div>
                {todo.done ? <p>Завершено</p> : <p>Не завершено</p>}
                <span>Дата создания: {createDate}</span>
                <span>Дата обновления: {updateDate}</span>
           

            </div>
                <div onKeyPress={handleSubmit} className='todo-text-description '>
                {isTodoEditDescription ? (
                    <input type='text' onChange={handleDescriptionChange} />
                ) : (
                    <span className={`${todo.done ? 'title-done' : ''}`}>
                        {todo.description}
                    </span>
                )}
            </div>
            
            <div className='todo-btns'>
                    <button
                        className='todo-btn btn btn-success button-todo-item'
                        onClick={handleComplete}
                    >
                        Завершить
                    </button>
                    <button
                        className='todo-btn btn btn-primary button-todo-item'
                        onClick={handleTodoEdit}
                    >
                        Изменить
                    </button>
                    <button
                        className='todo-btn btn btn-danger'
                        onClick={handleDelete}
                    >
                        Удалить
                    </button>
                </div>
        </li>
    );
};

export default TodoItem;
