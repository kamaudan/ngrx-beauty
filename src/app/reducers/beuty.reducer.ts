import { Action } from '@ngrx/store';
import { Beuty } from '../models/beuty.models';
import * as Actions from '../actions/beuty.actions';




const  initialState: Beuty = {

  name: 'Initial Beuty',
  url: 'http://google.com'
}

export function reducer(state: Beuty[] = [initialState], action: Actions.Actions) {
  switch (action.type) {
    case Actions.ADD_BEUTY:
      return [...state, action.payload];

      case Actions.REMOVE_BEUTY:
      state.splice(action.payload, 1)
    default:
      return state;
  }
}
