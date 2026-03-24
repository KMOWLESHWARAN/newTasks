import React, { useState } from 'react'

function UniqueList() {

    const [inputValue,setInputValue] = useState('');
    const [items,setItems] = useState([]);

    const handleAdd =(e) =>{
        // Return nothing if inputvlaue is empty
        if(inputValue.trim() === ""){
            return;
        }

        // Return alert msg if the item is already exist
        if(items.includes(inputValue.trim())){
            alert("Already exist");
            setInputValue('')
            return;
        }

        setItems([...items,inputValue]);
        setInputValue('');
    };


  return (
    <div>
        <div>
            <input 
            type="text" 
            placeholder='Enter items'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    items.map((item,index) => (
                        <li key={index}>{item} </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default UniqueList
