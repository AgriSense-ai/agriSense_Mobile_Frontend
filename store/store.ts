import { combineReducers, createStore } from "@reduxjs/toolkit";
import paymentReducer from "./paymentReducer";
import predictionReducer from "./predictionReducer";

const rootReducer = combineReducers({
  paymentData: paymentReducer,
  predictionData: predictionReducer,

});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
