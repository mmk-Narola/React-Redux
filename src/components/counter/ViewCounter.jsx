import React from "react";
import { useSelector } from "react-redux";

const ViewCounter = () => {
  const viewCounter = useSelector((state) => state.counter.value);
  const cartItem = useSelector((state) => state.cart);

  return (
    <div>
      <h1> ViewCounter : {viewCounter} </h1>
      <h1>Cart Item : {cartItem?.length}</h1>
    </div>
  );
};

export default ViewCounter;
