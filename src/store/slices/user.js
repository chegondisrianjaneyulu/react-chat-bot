// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 1,
  userName: "Satya Bhama",
  fname: "Satya",
  lname: "Bhama",
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userProfile = action.payload.userProfile;
    },
    clearUser: (state) => {
      state.userId = null;
      state.userName = "";
      state.userProfile = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
