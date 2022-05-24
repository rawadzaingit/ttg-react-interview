import { TodoActionTypes } from './actions';
import update from 'immutability-helper';
import { combineReducers } from 'redux';

const defaultState = {};

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return state;
    case TodoActionTypes.deleteTodo: {
      return state;
    }

    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
