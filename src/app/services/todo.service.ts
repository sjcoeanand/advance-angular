import { TodoModel } from './../models/todo.model';
import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TodoService {
   todoListBSubject = new BehaviorSubject<TodoModel[]>([{
    id:1,
    title: 'title1',
    description: 'test description',
    completed: false
   }]);
   newId = 2;

   getTodo() : Observable<TodoModel[]>{
        return this.todoListBSubject.asObservable();
   }

   toggleTodo(id:number) {
        const todos = this.todoListBSubject.getValue();
        let todoItem = todos.find(item => item.id === id);
        if(todoItem) {
            todoItem.completed  = !todoItem.completed;
            this.todoListBSubject.next(todos);
        }
   }

   deleteTodo(id:number) {
        this.todoListBSubject.next(this.todoListBSubject.getValue().filter(item => item.id !== id));
   }

   saveTodo(title:string, description: string) {
        const newTodo = {
            id: this.newId++,
            title,
            description,
            completed: false
        }
        this.todoListBSubject.next([...this.todoListBSubject.getValue(), newTodo]);
   }
}