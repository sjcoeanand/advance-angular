import { TodoModel } from './../models/todo.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-rxjs',
  templateUrl: './todo-rxjs.component.html',
  styleUrls: ['./todo-rxjs.component.scss'],
})
export class TodoRxjsComponent {

  todoList$:Observable<TodoModel[]>;
  todoTitle:string = '';
  todoDescription:string = '';
  constructor(private todoServiceInstance: TodoService) {
    this.todoList$ = this.todoServiceInstance.getTodo();
  }

  newTodo(){
    this.todoServiceInstance.saveTodo(this.todoTitle, this.todoDescription);
    this.todoTitle = "";
    this.todoDescription = "";
  }
  toggleTodo(id:number) {
    this.todoServiceInstance.toggleTodo(id);
  }
  removeTodo(id:number){
    this.todoServiceInstance.deleteTodo(id);
  }
}
