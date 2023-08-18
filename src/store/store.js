import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import justDriveReducer from './reducers/reducers';
import analysisReducer from './reducers/reducersAnalysis';
import destinationReducer from './reducers/reducersDestination';

const rootReducer = combineReducers({
  justDriveReducer,
  analysisReducer,
  destinationReducer,
});
// const rootReducer = combineReducers({justDriveReducer, justDriveReducerOld});

export const store = createStore(rootReducer, applyMiddleware(thunk));
