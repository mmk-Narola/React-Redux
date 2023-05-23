import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
// import Main from "./components/apiCalling/main";
// import ProductRootLayout from "./components/productProject/ProductRootLayout";
// import Axios from "./components/axiosApiCalling/axios";
// import Crud from "./components/crudDemo/Crud";
// import CrudOps from "./components/crudDemo/CrudOps";
// import Cart from "./components/productProject/Cart";

function App() {
  const cartItem = useSelector((state) => state.cart);

  const Counter = React.lazy(() => import("./components/counter/Counter"));
  const PostTodo = React.lazy(() => import("./components/posts/PostTodo"));
  const Main = React.lazy(() => import("./components/apiCalling/main"));
  const Axios = React.lazy(() => import("./components/axiosApiCalling/axios"));
  const ProductRootLayout = React.lazy(() =>
    import("./components/productProject/ProductRootLayout")
  );
  const Cart = React.lazy(() => import("./components/productProject/Cart"));
  const Crud = React.lazy(() => import("./components/crudDemo/Crud"));
  const CrudOps = React.lazy(() => import("./components/posts/PostTodo"));

  return (
    <>
      <Header />
      <div className="container">
        <React.Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Counter />}></Route>
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
