import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Redux Counter 🚀</h1>

        <h2 className="counter">{value}</h2>

        <div className="btn-group">
          <button
            className="btn increment"
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>

          <button
            className="btn decrement"
            onClick={() => dispatch(decrement())}
          >
            - Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;