import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodoListState, TodoState} from './store/todo/todo.state';
import {Observable} from 'rxjs';
import * as TodoAction from './store/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private store: Store<TodoListState>
  ) {
  }


  todoListState$: Observable<TodoState[]>;



  ngOnInit() {

    this.todoListState$ = this.store.select(state => state.todos);

    this.store.dispatch(new TodoAction.GetTodos());

    this.todoListState$.subscribe(res => {
      console.log('_____________');
      console.log(res);
      console.log('_____________');
    });

  }
}
