import React from "react";
import { useSelector } from "react-redux";

const ViewCounter = () => {
  const viewCounter = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1> ViewCounter : {viewCounter} </h1>
    </div>
  );
};

export default ViewCounter;
