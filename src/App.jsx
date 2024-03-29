import { useState } from "react";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import PostTodo from "./components/posts/PostTodo";
import Main from "./components/apiCalling/main";
import ProductRootLayout from "./components/productProject/ProductRootLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Axios from "./components/axiosApiCalling/axios";
import Crud from "./components/crudDemo/Crud";
// import Crud from "./components/crudDemo/Crud";
function App() {
  const [reduxExample, setReducExample] = useState("Redux-Counter");
  const btnLabel = [
    "Redux-Counter",
    "Redux-Post",
    "Redux-ApiCalling",
    "Redux-Product-Project",
    "Redux-Fetch-Api-Axios",
    "Redux-CRUD-Search-Demo",
  ];
  const cartItem = useSelector((state) => state.cart);

  const switchTab = () => {
    switch (reduxExample) {
      case "Redux-Counter":
        return <Counter />;
      case "Redux-Post":
        return <PostTodo />;
      case "Redux-ApiCalling":
        return <Main />;
      case "Redux-Product-Project":
        return <ProductRootLayout />;
      case "Redux-Fetch-Api-Axios":
        return <Axios />;
      case "Redux-CRUD-Search-Demo":
        return <Crud />;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        {btnLabel.map((label) => {
          return (
            <button
              key={label}
              onClick={() => {
                setReducExample(label);
              }}
            >
              {label}
            </button>
          );
        })}
        <button>CartItem:{cartItem.length}</button>
        <hr />
        <div className="output">{switchTab()}</div>
      </div>
    </>
  );
}

export default App;
