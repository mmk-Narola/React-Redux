import React from "react";
import NavBar from "./Navbar";
import CrudOps from "./CrudOps";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";

const CRUD = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/home" element={<Home />}></Route>
        <Route path="/addUser" element={<CrudOps />}></Route>
        <Route path="/home/edtiUser/:id" element={<CrudOps />}></Route>
      </Route>
    )
  );
  return (
    <>
      <NavBar />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default CRUD;
