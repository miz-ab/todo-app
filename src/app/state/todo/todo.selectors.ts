import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../models/todoModels';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => todo.completed)
);

export const selectPendingTodos = createSelector(
  selectTodos,
  (todos) => todos.filter(todo => !todo.completed)
);

export const selectTodoById = (id: string) =>
    createSelector(selectTodos, (todos) => todos.find(todo => todo.id === id));