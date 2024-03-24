import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Todo List'
	},
	{
		path: 'create',
		component: CreateTodoComponent,
		title: 'Create Todo'
	}
];
