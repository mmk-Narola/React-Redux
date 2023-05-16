import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../slice/counterSlice";
import ViewCounter from "./ViewCounter";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ViewCounter />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
