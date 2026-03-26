import React, { useState,useCallback } from 'react'
import Child from './Child';

function Parent() {
    console.log("Parent component");
    const [counter,setCounter] = useState(0);

    const handelClick = useCallback(()=>{
        console.log("Button clicked from child")
    },[]);

  return (
    <div>
        <h2>Parent Component</h2>
        <h4>Counter : {counter}</h4>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>

        <Child onClick={handelClick}/>
    </div>
  )
}

export default Parent;
