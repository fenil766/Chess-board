// src/App.js
import React from "react";
import { Provider } from "react-redux";
import ChessBoard from "./components/ChessBoard";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Chess Board</h1>
        <ChessBoard />
      </div>
    </Provider>
  );
}

export default App;
