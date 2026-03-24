import React, { useState } from 'react';
import Child from './Child';

function Parent() {

    console.log("Parent component");
    
    const [counter , setCounter] = useState(0);
    
    const Increment = ()=>{
        setCounter(counter+1)
    }

    const Decrement = ()=>{
        setCounter(counter-1)
    }

  return (
    <div>
        <Child/>
        <h2>Counter : {counter}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Parent;