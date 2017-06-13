import {Action} from '@ngrx/store';

// step1: defining the actions and the reducer

export const MULTIPLYBYTWO = 'MULTIPLYBYTWO';
export const DIVIDEBYTWO = 'DIVIDEBYTWO';

//plan the reducer(prev.state, action)
export function MathReducer(state:number = 2000, action:Action){
//logic to deal with action.type
  switch (action.type){
    case 'MULTIPLYBYTWO':
    //  return '!' + state + '!'
      return state * 2;

    case 'DIVIDEBYTWO' :
    //  return '!' + state + '!'
      return state / 2 ;

    default:
      return state;
  } //switch ends
}
