import { Dispatch } from 'redux';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};
export class TodoActions {
  addTodo = title => {};

  removeTodo = id => {};
}
