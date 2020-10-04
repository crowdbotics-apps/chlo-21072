import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView125733Reducer from '../features/CalendarView125733/redux/reducers';
import EmailAuth125732Reducer from '../features/EmailAuth125732/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView125733: CalendarView125733Reducer,
EmailAuth125732: EmailAuth125732Reducer,

});