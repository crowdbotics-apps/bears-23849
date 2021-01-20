import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn15194791Reducer from '../features/SignIn15194791/redux/reducers'
import SignUp26194790Reducer from '../features/SignUp26194790/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn15194791: SignIn15194791Reducer,
SignUp26194790: SignUp26194790Reducer,

});