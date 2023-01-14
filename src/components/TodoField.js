import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoField({ addTodo }) {

  const [value, setValue] = useState("s");
  const inputRef = useRef();

  const handleClick = () => {
    addTodo({
      id: uuidv4(),
      name: value,
      status: false,
    });
    setValue("");
    inputRef.current.focus();
  }

  const handleEnter = e =>{
    e.preventDefault();
    if(e.code==="Enter"){
      document.getElementById('button').click();
    }

  };
  

  return (
    <div className='todoField'>

      <input
       onKeyUp={handleEnter} 
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todoField_input" />

      <button id='button' onClick={() => handleClick()} type='submit'
        className='todoField_btn' >
        ADD
      </button>
    </div>
  )
}
