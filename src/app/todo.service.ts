import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todoList: Todo[] = [];
	uid: number = 0;
	
	createTodo(text: String) {
		this.todoList.push({
			checked: false,
			text: text,
			id: this.uid
		})

		this.uid++;
	}

	getTodoList(): Todo[] {
		return this.todoList;
	}

	checkTodo(id: number) {
		this.todoList.map((e) => {
			if(e.id == id) {
				e.checked = !e.checked;
			}
		})
	}

	deleteTodo(id: number) {
		this.todoList.forEach((e, i) => {
			if(e.id == id) {
				this.todoList.splice(i, 1)
			}
		})

		console.log(this.todoList)
	}
}
