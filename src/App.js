import React, { useState } from "react";
import ToDoItem from './ToDoItem';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function readText(e) {
    const typedVal = e.target.value;
    setInputText(typedVal);
  }

  function addItem() {
    setItems( prevItems => {

      return [...prevItems, inputText];

    
  }); 
  setInputText('');
} 



  return (
    <div className="container">
      <div className="heading">
        <h1>Task Tracker</h1>
      </div>
      <div className="form">
        <input onChange={readText} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
      {items.map( (item, index) => (
        <ToDoItem
          key={index}
          input={item}
        />
      ))}
    </ul>
      </div>
    </div>
  );
}

export default App;
