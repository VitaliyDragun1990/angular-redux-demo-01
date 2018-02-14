import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { TodoActions } from '../actions';
import { IAppState } from '../store';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnDestroy {
  subscription: Subscription;
  protected todos: Todo[];

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: TodoActions) {
    this.subscription = ngRedux.select<Todo[]>('todos')
      .subscribe(tds => {
        this.todos = tds;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    this.ngRedux.dispatch(this.actions.addTodo(input.value));

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch(this.actions.toggleTodo(todo));
  }

  removeTodo(todo) {
    this.ngRedux.dispatch(this.actions.removeTodo(todo));
  }

}
