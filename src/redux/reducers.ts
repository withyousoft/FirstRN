import {SET_USER_AGE, SET_USER_NAME} from './actions';

const initialState = {
  name: '',
  age: 0,
};

export type StateType = typeof initialState;

function userReducer(state: StateType = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    default:
      return state;
  }
}

export default userReducer;
