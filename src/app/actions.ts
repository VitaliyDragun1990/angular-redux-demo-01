import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { Todo } from './model/todo';

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADD_TODO';
  static REMOVE_TODO = 'REMOVE_TODO';
  static TOGGLE_TODO = 'TOGGLE_TODO';
  static CLEAR_TODOS = 'CLEAR_TODOS';

  private static id_number = 100;

  static getTodoId(): number {
    return this.id_number++;
  }

  addTodo(title: string): AnyAction {
    return {
      type: TodoActions.ADD_TODO,
      title
    };
  }

  removeTodo(todo: Todo): AnyAction {
    return {
      type: TodoActions.REMOVE_TODO,
      todo
    };
  }

  toggleTodo(todo: Todo): AnyAction {
    return {
      type: TodoActions.TOGGLE_TODO,
      todo
    };
  }

  clearTodos(): AnyAction {
    return {
      type: TodoActions.CLEAR_TODOS
    };
  }
}
