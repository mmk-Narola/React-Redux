import React from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "./Product";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2> Dashboard</h2>
        <h2>
          <Link to="cart">Cart({cartItem?.length})</Link>
        </h2>
      </div>

      <Product />
    </div>
  );
};

export default Dashboard;
