import { Component, inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [RouterModule],
  template: `
		<section>
			<div>
				<input type="text" name="todo" id="todo" #todo>
				<a id="create" (click)="createTodo(todo.value)">Create</a>
				<a id="cancel" [routerLink]="['/']">Cancel</a>
			</div>
		</section>
	`,
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent implements AfterViewInit {
	@ViewChild('todo') todoInput!: ElementRef;
	
	ngAfterViewInit() {
		this.todoInput.nativeElement.focus();

		this.todoInput.nativeElement.addEventListener('keydown', (e: KeyboardEvent) => {
			if(e.key == 'Enter') {
				this.createTodo(this.todoInput.nativeElement.value)
			}
		})
	}

	todoService: TodoService = inject(TodoService);
	router: Router = new Router();

	createTodo(text: String) {
		if(text == "") return;
		
		this.todoService.createTodo(text)
		this.router.navigateByUrl("/")
	}
}
