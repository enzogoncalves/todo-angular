import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
		<div class="todo">
			<input type="checkbox" name="todo_{{todo.id}}" id="todo_{{todo.id}}" (click)="checkTodo(todo.id)">
			<label for="todo_{{todo.id}}" class="{{todo.checked ? 'checked' : ''}}">{{todo.text}}</label>
			<button type="button" class="delete icon-trash" (click)="deleteTodo(todo.id)" title="Delete Todo"></button>
		</div>
	`,
  styleUrls: ['./todo.component.css', '../../assets/icons/style.css']
})

export class TodoComponent {
	@Input() todo!: Todo;
	@Input() checkTodo!: (id: number) => void;
	@Input() deleteTodo!: (id: number) => void;
}
