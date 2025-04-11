import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';  
import { addTodo, removeTodo, toggleTodo } from '../state/todo/todo.actions';
import { selectTodos } from '../state/todo/todo.selectors';
import { Todo } from '../models/todoModels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  taskName = '';
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    // Select the todos state from the store
    this.todos$ = store.pipe(select(selectTodos));
  }

  saveTask() {
    if (this.taskName.trim()) {
      console.log('Saving task:', this.taskName);
      // Dispatch action to add a new todo
      this.store.dispatch(addTodo({ title: this.taskName }));
      this.taskName = '';
    }
  }

  removeTask(id: string) {
    // Dispatch action to remove todo
    this.store.dispatch(removeTodo({ id }));
  }

  toggleTask(id: string) {
    // Dispatch action to toggle todo's completion
    this.store.dispatch(toggleTodo({ id }));
  }

  cancel() {
    this.taskName = '';
  }
}
