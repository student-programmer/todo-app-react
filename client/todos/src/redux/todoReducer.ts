import { ITodoAction, ITodoActionTypes, ITodoState } from '../types/types';

export const initialState = {
	todos: [],
};
export const todoReducer = (
	state: ITodoState = initialState,
	action: ITodoAction
) => {
	switch (action.type) {
		case ITodoActionTypes.CREATE_TODO_SUCCESS:
			return { todos: [...state.todos, action.payload] };
		case ITodoActionTypes.DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			};
		case ITodoActionTypes.GET_TODOS_SUCCESS:
			return { ...state, todos: action.payload };
		case ITodoActionTypes.EDIT_TODO_SUCCESS: {
			const completeIndex = state.todos.findIndex(
				todo => todo.id === action.id
			);
			const newTodos = [...state.todos];
			if (completeIndex === -1) {
				return state;
			}
			newTodos[completeIndex] = action.payload;
			return { ...state, todos: newTodos };
		}
		case ITodoActionTypes.COMPLETE_TODO_SUCCESS: {
			const completeIndex = state.todos.findIndex(
				todo => todo.id === action.payload
			);
			const newTodos = [...state.todos];
			if (completeIndex === -1) {
				return state;
			}
			newTodos[completeIndex].done = !newTodos[completeIndex].done;
			return { ...state, todos: newTodos };
		}

		default:
			return state;
	}
};
