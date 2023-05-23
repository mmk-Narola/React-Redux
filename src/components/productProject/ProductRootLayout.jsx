import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Cart from "./Cart";

const ProductRootLayout = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route index element={<Dashboard />}></Route>,
  //       <Route path="/cart" element={<Cart />}></Route>
  //     </Route>
  //   )
  // );

  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Dashboard />
    </div>
  );
};

export default ProductRootLayout;
