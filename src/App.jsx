import { useState } from "react";
import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import PostTodo from "./components/posts/PostTodo";

function App() {
  const [reduxExample, setReducExample] = useState("Redux-Counter");
  const btnLabel = ["Redux-Counter", "Redux-Post"];

  const switchTab = () => {
    switch (reduxExample) {
      case "Redux-Counter":
        return <Counter />;
      case "Redux-Post":
        return <PostTodo />;
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
        <hr />
        <div className="output">{switchTab()}</div>
      </div>
    </>
  );
}

export default App;
