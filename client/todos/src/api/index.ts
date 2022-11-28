import axios from 'axios';
import { ITodo, ITodoState } from '../types/types';

export class TodoApi {
    static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
        const res = await axios.post('http://localhost:5000/todo', todo);
        return res.data;
    }
    static async deleteTodo(id: string): Promise<void> {
        await axios.delete(`http://localhost:5000/todo/${id}`);
    }
    static async getTodos(): Promise<ITodoState[]> {
        const res = await axios.get(`http://localhost:5000/todo`);
        return res.data;
    }
    static async completeTodo(todo: Partial<ITodo>): Promise<void> {
        await axios.patch(`http://localhost:5000/todo/${todo.id}`, todo);
    }
    static async editTodo(todo: Partial<ITodo>): Promise<ITodo> {
        const res = await axios.patch(`http://localhost:5000/todo/${todo.id}`, todo);
        return res.data[1][0]
    }
}   
