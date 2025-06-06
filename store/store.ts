import { combineReducers, createStore } from "redux";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
  paymentData: paymentReducer,
  // networkName: (state = initialState.networkName, action) => {
  //   switch (action.type) {
  //     case "SET_NETWORK_NAME":
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // },
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
