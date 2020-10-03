import React from "react";
import "./App.css";

function App() {
  const inputRef = React.useRef(null);
  const [list, addList] = React.useState(["Apple", "Banana"]);
  const [printList, addPrintList] = React.useState(null);

  function AddItem() {
    if (inputRef.current !== null) {
      if (
        inputRef.current.value !== "" &&
        inputRef.current.value !== undefined
      ) {
        addList(list.concat(inputRef.current.value));
      }
    }
  }

  React.useEffect(() => {
    addPrintList(() => {
      return list.map((listItem) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <li
              onClick={(event) => {
                if (event.target.style.background !== "red") {
                  event.target.style.background = "red";
                } else {
                  event.target.style.background = "#eee";
                }
              }}
            >
              {listItem}
            </li>
            <p
              style={{ background: "#eee", padding: "0 20px", height: "auto" }}
            >
              X
            </p>
          </div>
        );
      });
    });
  }, [list]);
  return (
    <div className="App">
      <div className="Container">
        <div>My TODO List</div>
        <input ref={inputRef} type="text" />
        <input
          type="button"
          onClick={() => {
            AddItem();
          }}
          value="Add"
        />
      </div>
      <div className="list">
        <ul>{printList}</ul>
      </div>
    </div>
  );
}

export default App;
