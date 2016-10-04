import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
   switch (action.type) {
     case FETCH_WEATHER:
        return [ action.payload.data, ...state ]; //it is the same below, with ES6
        //return state.concat( [action.payload.data] ); //for each search, we must show up the historic in the screen. If its online a search at time, just 'return [action.payload.data]'
   }
  return state;
}
