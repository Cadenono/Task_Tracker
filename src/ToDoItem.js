import React, {useState} from 'react';


export default function ToDoItem(props) {
    const [clicked, setClicked] = useState(false); 
    function handleClick() { 
        setClicked(x => !x);
    }
    return (
      <div onClick={handleClick}>
        <li style={{textDecoration: clicked && 'line-through'}}>{props.input}</li>
      </div>
    );
  }
  

