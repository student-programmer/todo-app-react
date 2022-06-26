import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/Actions';
import './TodoForm.css';
const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title.trim()) {
            return
        }

        //@ts-ignore
        dispatch(createTodo(title));
        setTitle('');
    };
    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className='mb-3 d-flex align-items-end justify-content-between'
        >
            <div className='form-group todo-input'>
                <label htmlFor='' className='form-label'>
                    Введите название дела
                </label>
                <input
                    onChange={handleChangeInputValue}
                    type='text'
                    className='form-control'
                    name=''
                    id=''
                />
            </div>
            <button className='btn btn-success'>создать</button>
        </form>
    );
};

export default TodoForm;
