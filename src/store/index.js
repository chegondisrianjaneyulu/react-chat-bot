import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user"; 
import chatReducer from './slices/chat'

const store = configureStore({
  reducer: {
    user: userReducer, 
    chat: chatReducer
  },
});

export default store;