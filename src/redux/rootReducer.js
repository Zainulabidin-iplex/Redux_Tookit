import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice/userReducer";

export const rootReducer = combineReducers({
  users: userSlice.reducer,
});
