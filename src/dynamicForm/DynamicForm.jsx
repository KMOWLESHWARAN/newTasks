import React,{useState} from 'react'

function DynamicForm() {

    const [fields,setFields] = useState([{
        id: Date.now(),
        value:''
    }]);

    const handleAdd =()=>{
        setFields([...fields,{id: Date.now(),value:''}]);
    };

    const handleChange = (id,newValue)=>{
        setFields(fields.map((field)=>(
            field.id === id? {...field,value:newValue}:field
        )))
    };

    const handleRemove = (id)=>{
        setFields(fields.filter(field => field.id !== id))
    };

  return (
    <div>
        <h1>Dynamic Form</h1>
        <button onClick={handleAdd}>Add</button>

        {fields.map((field)=>(
            <div key={field.id}>
                <input 
                type="text"
                value={field.value}
                placeholder='Enter text'
                onChange={(e)=>handleChange(field.id,e.target.value)}
                />
                <button onClick={()=>handleRemove(field.id)}>remove</button>
            </div>
        ))}
    </div>
  )
}

export default DynamicForm
