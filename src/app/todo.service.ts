import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todoList: Todo[] = [];
	
	createTodo(text: String) {
		this.todoList.push({
			checked: false,
			text: text,
			id: this.todoList.length
		})
	}

	getTodoList(): Todo[] {
		return this.todoList;
	}

	checkTodo(id: number) {
		this.todoList[id].checked = !this.todoList[id].checked;
	}

	deleteTodo(id: number) {
		this.todoList.splice(id, 1)
	}
}
