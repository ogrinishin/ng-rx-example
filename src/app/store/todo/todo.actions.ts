import {Action} from '@ngrx/store';
import {TodoState} from './todo.state';
import Todo from '../../models/todo.model';

export enum TodoActionTypes {
  GetTodo = '[Todo] GET_TODO',
  GetTodoSuccess = '[Todo] GET_TODO_SUCCESS',
  GetTodoError = '[Todo] GET_TODO_ERROR',
  GetTodos = '[Todo] GET_TODOS',
  GetTodosSuccess = '[Todo] GET_TODOS_SUCCESS',
  GetTodosError = '[Todo] GET_TODOS_ERROR'
}


export class GetTodos implements Action {
  readonly type = TodoActionTypes.GetTodos;
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GetTodosSuccess;
  constructor(public payload: TodoState[]) {}
}

export class GetTodosError implements Action {
  readonly type = TodoActionTypes.GetTodosError;
}


export type All = GetTodos | GetTodosSuccess | GetTodosError;
