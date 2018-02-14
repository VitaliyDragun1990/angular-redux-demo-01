import { Todo } from './model/todo';
import { AnyAction } from 'redux';
import { TodoActions } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
  todos: Todo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

function addTodo(state: IAppState, action: AnyAction): IAppState {
  const todo: Todo = new Todo(TodoActions.getTodoId(), action.title);
  return tassign(state, {todos: state.todos.concat(todo), lastUpdate: new Date()});
}

function removeTodo(state: IAppState, action: AnyAction): IAppState {
  const target = state.todos.filter(t => t.id !== action.todo.id);
  return tassign(state, {todos: target, lastUpdate: new Date()});
}

function toggleTodo(state: IAppState, action: AnyAction): IAppState {
  const toggledTodo = state.todos[state.todos.findIndex(t => t.id === action.todo.id)];
  const index = state.todos.indexOf(toggledTodo);
  const beforeTodos = state.todos.slice(0, index);
  const afterTodos = state.todos.slice(index + 1);
  const updatedTodo = tassign(toggledTodo, {isCompleted: !toggledTodo.isCompleted});
  const newTodos = [...beforeTodos, updatedTodo, ...afterTodos];
  return tassign(state, {todos: newTodos, lastUpdate: new Date()});
}

function clearTodos(state: IAppState, action: AnyAction): IAppState {
  if (state.todos.length > 0) {
    return tassign(state, { todos: [], lastUpdate: new Date() });
  }
  return state;
}

export function rootReducer(state: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return addTodo(state, action);
    case TodoActions.REMOVE_TODO:
      return removeTodo(state, action);
    case TodoActions.TOGGLE_TODO:
      return toggleTodo(state, action);
    case TodoActions.CLEAR_TODOS:
      return clearTodos(state, action);
  }
  return state;
}

