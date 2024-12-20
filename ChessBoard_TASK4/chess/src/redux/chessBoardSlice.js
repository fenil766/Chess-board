// src/redux/chessBoardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = Array(8)
  .fill(null)
  .map((_, rowIndex) =>
    Array(8)
      .fill(null)
      .map((_, colIndex) => ({
        color: (rowIndex + colIndex) % 2 === 0 ? "white" : "black",
      }))
  );

const chessBoardSlice = createSlice({
  name: "chessBoard",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { row, col } = action.payload;
      const square = state[row][col];
      if (square.color === "white") {
        square.color = "yellow";
      } else if (square.color === "black") {
        square.color = "red";
      }
    },
  },
});

export const { changeColor } = chessBoardSlice.actions;
export default chessBoardSlice.reducer;
