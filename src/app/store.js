import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, //slice reducer
    app: appReducer, //slice reducer
  },
});
