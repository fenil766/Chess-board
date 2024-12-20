// src/components/ChessBoard.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../redux/chessBoardSlice";
import "./ChessBoard.css";

const ChessBoard = () => {
  const chessBoard = useSelector((state) => state.chessBoard);
  const dispatch = useDispatch();

  const handleSquareClick = (row, col) => {
    dispatch(changeColor({ row, col }));
  };

  return (
    <div className="chessboard">
      {chessBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className="square"
              style={{ backgroundColor: square.color }}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
