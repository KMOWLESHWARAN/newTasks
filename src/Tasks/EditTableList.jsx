import { useState } from 'react'

function EditTableList() {

    const [inputValues,setInputValues] = useState('')
    const [items,setItems] = useState([]);
    const [editIndex , setEditIndex] = useState(null);

    const handleAdd =()=>{
        if(inputValues.trim()==="") return;

        if(items.includes(inputValues.trim())){
            alert("Already exist");
            setInputValues('');
            return;
        }

        setItems([...items,inputValues.trim()]);
        setInputValues('');
    };

    const handleEdit = (index)=>{
        setInputValues(items[index]);
        setEditIndex(index);
    }

    const handelUpdate= ()=>{

        if(inputValues.trim()==="") return;

        const updatedItems = [...items];
        updatedItems[editIndex] = inputValues.trim();
        setItems(updatedItems);

        setInputValues('');
        setEditIndex(null);
    }

    const handelCancel=()=>{
        setInputValues('');
        setEditIndex(null);
    }
  return (
    <div>
        <h3>Edit Table List</h3>

        <input 
        type="text"
        placeholder='Enter items'
        value={inputValues}
        onChange={(e)=>setInputValues(e.target.value)}
         />

         {editIndex === null ? (
                <button onClick={handleAdd}>Add</button>
            ) : (
                <>
                    <button onClick={handelUpdate}>Update</button>
                    <button onClick={handelCancel}>Cancel</button>
                </>
            )}

         <ul>
            {
                items.map((item,index) =>(
                    <li key={index}>
                        {item}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    </li>
                ))
            }
         </ul>
    </div>
  )
}

export default EditTableList
