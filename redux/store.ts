import { combineReducers, createStore } from "redux";

const initialState = {
  networkName: null,
  number: null,
};

const rootReducer = combineReducers({
  networkData: () => initialState,
});

export const store = createStore(
  rootReducer
  // Apply any middleware here if needed
  // For example:
  // applyMiddleware(thunk, logger)
);
