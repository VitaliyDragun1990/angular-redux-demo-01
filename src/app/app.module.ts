import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { TodoActions } from './actions';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [TodoService, TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  }
}
