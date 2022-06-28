import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, showAlert } from '../../redux/Actions';
import { IAlertReducer } from '../../types/types';
import Alert from '../Alert/Alert';
import './TodoForm.css';
const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const alertState = useSelector(
        (state: IAlertReducer) => state.alertReducer
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title.trim()) {
            dispatch(
                showAlert('Название дела не может быть пустым', 'warning')
            );
            return;
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
            
        >
            {alertState.alertText.length > 0 && <Alert props={alertState} />}
            <div  className='mb-3 d-flex align-items-end justify-content-between'>
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
            </div>
        </form>
    );
};

export default TodoForm;
