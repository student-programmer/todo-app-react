import React, { ChangeEvent, useState } from 'react';
import { ITodo } from '../../types/types';
import './TodoItem.css'
interface ITodoProps {
    todo: ITodo;
    deleteTodo:(arg0: string) => void;
    doneTodo:(arg0: string, arg1: boolean) => void;
    changeTodo:(arg0: string, arg1: boolean, arg2: string) => void
}
const TodoItem = ({ todo, deleteTodo, doneTodo, changeTodo }: ITodoProps) => {
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done)


    const [isTodoEdit, setIsTodoEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('')

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter'){
            changeTodo(newTitle, todo.done, todo.id)
            setIsTodoEdit(!isTodoEdit)
        }
    }
    const handleTodoEdit = () =>{
        setIsTodoEdit(!isTodoEdit)
    }
    
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setNewTitle(event.target.value)
    }



    return (
        <li className={ `todo-item list-group-item d-flex justify-content-between align-items-center ${todo.done ? 'list-group-item-success' : ''}`}>
            <span className='number_todo'>№{todo.id}</span>
            <div onKeyPress={handleSubmit} className="todo-text">
                {isTodoEdit ? <input type='text' onChange={handleTitleChange}/> : <span className={`${todo.done ? 'title-done' : ''}`}>{todo.title}</span>}
         
            </div>
            <div className="todo-btns">
                <button className='todo-btn btn btn-success button-todo-item' onClick={handleComplete}>Завершить</button>
                <button className='todo-btn btn btn-primary button-todo-item' onClick={handleTodoEdit} >Изменить</button>
                <button className='todo-btn btn btn-danger' onClick={handleDelete}>Удалить</button>
            </div>
        </li>
    );
};

export default TodoItem;
