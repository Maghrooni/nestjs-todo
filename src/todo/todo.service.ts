import {Injectable, HttpException} from '@nestjs/common';
import {TODOS} from '../mocks/todo.mock';

@Injectable()
export class TodoService {
    todos = TODOS;

    getTodos(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.todos);
        });
    }

    getTodo(todoId): Promise<any> {
        let id: number = Number(todoId);
        return new Promise(resolve => {
            const todo = this.todos.find(todo => todo.id === id);
            if (!todo) {
                throw new HttpException('not found', 404);
            }
            resolve(todo);
        });
    }

    addTodo(todo): Promise<any> {
        return new Promise(resolve => {
            this.todos.push(todo);
            resolve(this.todos);
        });
    }

    deleteTodo(todoId): Promise<any> {
        let id: number = Number(todoId);
        return new Promise(resolve => {
            let index: number = this.todos.findIndex(todo => todo.id === id);
            if (index === -1) {
                throw new HttpException('todo not found', 404);
            }

            this.todos.splice(1, index);
            resolve(this.todos);
        });
    }
}
