export enum ITodoActionTypes {
    CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
    CREATE_TODO = 'CREATE_TODO',
    GET_TODOS = 'GET_TODOS',
    CHANGE_TODO = 'CHANGE_TODO',
    COMPLATE_TODO = 'COMPLATE_TODO',
    DELETE_TODO = 'DELETE_TODO',
}

export interface ITodo {
    id: string;
    title: string;
    done: boolean;
}

export interface ITodoState {
    todos: ITodo[];
}
export interface ITodoReducer {
    todoReducer: ITodoState;
}

export interface ICreateAction {
    type: ITodoActionTypes.CREATE_TODO_SUCCESS | ITodoActionTypes.CREATE_TODO;
    payload: string
}
export type ITodoAction = ICreateAction;
