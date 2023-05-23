import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import Counter from "./components/counter/Counter";
import PostTodo from "./components/posts/PostTodo";
import Main from "./components/apiCalling/main";
import ProductRootLayout from "./components/productProject/ProductRootLayout";
import Header from "./components/header/Header";
import Axios from "./components/axiosApiCalling/axios";
import Crud from "./components/crudDemo/Crud";
import CrudOps from "./components/crudDemo/CrudOps";
import Cart from "./components/productProject/Cart";

function App() {
  const cartItem = useSelector((state) => state.cart);
  // const Counter = React.lazy("./components/counter/Counter");

  return (
    <>
      <Header />
      <div className="container">
        <React.Suspense fallback={<>...</>}>
          <Routes>
            <Route path="/" element={<Crud />}></Route>
            <Route path="/post-crud" element={<PostTodo />}></Route>
            <Route path="/api-calling" element={<Main />}></Route>
            <Route path="/axios-api-calling" element={<Axios />}></Route>
            <Route path="/shopping" element={<ProductRootLayout />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/crud-home" element={<Crud />}></Route>
            <Route path="/addUser" element={<CrudOps />}></Route>
            <Route path="/crud-home/edtiUser/:id" element={<CrudOps />}></Route>
          </Routes>
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
