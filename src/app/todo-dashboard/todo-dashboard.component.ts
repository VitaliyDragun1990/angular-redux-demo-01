import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { Observable } from 'rxjs/Observable';
import { TodoActions } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select(['todos', 'length']) todos: Observable<number>;
  @select('lastUpdate') lastUpdate: Observable<Date>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: TodoActions) {
  }

  clearTodos() {
    this.ngRedux.dispatch(this.actions.clearTodos());
  }

  ngOnInit() {
  }

}
