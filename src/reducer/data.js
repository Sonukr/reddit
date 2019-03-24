
import { SetData } from '../actions/getData';

const initialState = {};

export function initialData (state = initialState ,action) {
  switch (action.type) {
  case SetData.typeName():
    return action.payload;
  default:
    return state;
  }
}