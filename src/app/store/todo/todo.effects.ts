import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import * as TodoActions from './todo.actions';
import {TodoState} from './todo.state';
import {catchError, map, mergeMap} from 'rxjs/operators';


@Injectable()
export class TodoEffects {

  @Effect()
  GetTodos$: Observable<Action> = this.actions$.ofType<TodoActions.GetTodos>(TodoActions.TodoActionTypes.GetTodos)
    .pipe(
      mergeMap(action =>
        of([]).pipe(
          map((data) => {
            console.log(data);
            return new TodoActions.GetTodosSuccess([{
              loading: false,
              editable: true,
              edited: true,
              editing: true,
              selected: true,
              refreshing: true,
              create: true,
              error: false
            }] as TodoState[]);
          })
        )
      )
    );
  // GetTodos$: Observable<Action> = this.actions$.ofType<TodoActions.GetTodos>(TodoActions.TodoActionTypes.GetTodos)
  //   .pipe(
  //     res => {
  //       console.log(res);
  //       return res;
  //     }
  //   );
  //   // .pipe(
  //   //   mergeMap(action => {
  //   //       console.log(action);
  //   //       return new TodoActions.GetTodosSuccess(<TodoState[]>[]);
  //   //     }
  //   //   )
  //   // );

  constructor(
    private actions$: Actions
  ) {
  }
}
