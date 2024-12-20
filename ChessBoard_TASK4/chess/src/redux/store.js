// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import chessBoardReducer from "./chessBoardSlice";

const store = configureStore({
  reducer: {
    chessBoard: chessBoardReducer,
  },
});

export default store;
