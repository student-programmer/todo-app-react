import { ITodoActionTypes } from "../../types/types"

export const getTodos = () => {
    return {
        type: ITodoActionTypes.GET_TODOS,
        
    }
}

export const createTodo = (title: string, description: string) => {
	return {
		type: ITodoActionTypes.CREATE_TODO,
		payload: {
            title, 
            description
        }
	};
};
export const deleteTodo = (payload: string) => {
    return {
        type: ITodoActionTypes.DELETE_TODO,
        payload
    }
}
export const completeTodo = ( id: string, done: boolean) => {
    return {
        type: ITodoActionTypes.COMPLETE_TODO,
        payload:{
            id, 
            done
        }
    }
}
export const editTodo = (id: string, done: boolean, title: string, description: string) => {
	return {
		type: ITodoActionTypes.EDIT_TODO,
		payload: {
			id,
			done,
			title,
			description,
		},
	};
};
export const showAlert = ( text:string, status: string) => {
    return {
        type: ITodoActionTypes.SHOW_ALERT,
        payload:text,
        status
    }
}
export const hideAlert = () => {
    return {
        type: ITodoActionTypes.HIDE_ALERT,
    }
}