import { useState } from 'react';

function LinkedCounter() {

    const [count,setCount] = useState(0);

    // {Increment the count value twice}
    const doubleValue = count * 2; 

    // {Increment function}
    const increment = ()=>{
        setCount(count+1)
    }

    // {Decrement function}
    const decrement = ()=>{
        setCount(count-1)
    }

    // {Reset function}
    const reset = ()=>{
        setCount(0)
    }
    
  return (
    <div>
        <h3>Linked Counter</h3>

        <p>Count: {count}</p>
        <p>Double Value: {doubleValue}</p>

        <button onClick={increment}>Increment</button> 
        <button onClick={decrement}>Decrement</button> 
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default LinkedCounter
