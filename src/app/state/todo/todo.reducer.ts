import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';
import { Todo } from '../../models/todoModels';
import { v4 as uuidv4 } from 'uuid';

// Initial state
export const initialState: Todo[] = [];

// Reducer function
export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => [
    ...state,
    { id: uuidv4(), title, completed: false }
  ]),
  on(removeTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleTodo, (state, { id }) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
);
