import React,{memo} from 'react'

function Child({onClick}) {
    console.log("Child Component")
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default memo(Child);
