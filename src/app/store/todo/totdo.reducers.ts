import Todo from '../../models/todo.model';
import {initializeTodoState, TodoListState, TodoState} from './todo.state';
import * as TodoActions from './todo.actions';
import {TodoActionTypes} from './todo.actions';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
];


const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
};

export function TodoReducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case TodoActionTypes.GetTodos: {
      return {...state, loaded: false, loading: true};
    }

    case TodoActionTypes.GetTodosSuccess: {
      return {
        ...state,
        todos: [
          ...action.payload,
          defaultTodoStates[0]
        ],
        loading: false
      };
    }
  }
}
