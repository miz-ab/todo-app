import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todoModels';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ title: string }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: string }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',
  props<{ id: string }>()
);
