import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, TodoComponent],
  template: `
		<header>
				<nav>
					<h1 id="title">Todo</h1>
					<a [routerLink]="['/create']">Create</a>
				</nav>
		</header>
    <section id="todos">
			<app-todo *ngFor="let todo of todoList" [todo]="todo" [checkTodo]="checkTodo.bind(this)" [deleteTodo]="deleteTodo.bind(this)"></app-todo>
		</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.getTodoList();
  }

  checkTodo(id: number) {
    this.todoService.checkTodo(id);
    this.todoList = this.todoService.getTodoList();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todoList = this.todoService.getTodoList();
  }
}