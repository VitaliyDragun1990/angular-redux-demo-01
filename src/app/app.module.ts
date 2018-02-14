import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
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
  providers: [TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      enhancers
    );
  }
}
