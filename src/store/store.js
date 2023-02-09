import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./features/counter/counterSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  job: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
