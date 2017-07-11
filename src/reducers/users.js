import { FETCH_USERS } from '../actions/types';

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
