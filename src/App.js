import React, { useState } from "react";
import './App.css';
import InputArea from "./components/inputArea";
import TodoItems from "./components/TodoItems";

function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    })
  }

  const deleteItems = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((it, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>ToDo List</h1>
      </div>
      <InputArea onAdd={addItems} />
      {items.map((it, index) => (
        <TodoItems key={index} id={index} text={it} onChecked={deleteItems} />
      ))}
    </div>
  );
}

export default App;
