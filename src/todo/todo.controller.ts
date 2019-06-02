import {Controller, Get, Param, Post, Body, Query, Delete} from '@nestjs/common';
import {TodoService} from './todo.service';
import {TodoDTO} from './dto/todo';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {
    }

    @Get()

    async getTodos() {
        const todos = await this.todoService.getTodos();
        return todos;
    }

    @Get(':todoId')

    async getTodo(@Param('todoId') todoId) {
        const todo = await this.todoService.getTodo(todoId);
        return todo;
    }

    @Post()

    async addTodo(@Body() TodoDTO: TodoDTO) {
        const todo = await this.todoService.addTodo(TodoDTO);
        return todo;
    }

    @Delete()

    async deleteTodo(@Query() query) {
        const todos = await this.todoService.deleteTodo(query.todoId);
        return todos;
    }

}
