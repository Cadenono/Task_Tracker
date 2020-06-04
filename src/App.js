import React, { useState } from "react";
import SingleTask from './SingleTask';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  let time = new Date().toLocaleString();

  function readText(e) {
    const typedVal = e.target.value;
    setInputText(typedVal);
  }

  function addItem() {
    setItems( prevText => [...prevText, inputText])
    ; 
  setInputText('');
} 



  return (
    <div className="container">
      <div className="heading">
        <h1>Task Tracker</h1>
        <h4>Welcome. It is {time}.</h4>

      
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
        <SingleTask
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
