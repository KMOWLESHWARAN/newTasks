import React, { useState } from 'react'

function UsernameValidation() {

    const [name,setName] = useState('');

    // {handle the input value change}
    const handleChange = (e) =>{
        setName(e.target.value);
    }

  return (
    <div>
        <h3>Usernmae Validation</h3>

        <div>
            <input 
            type="text" 
            placeholder='Enter name'
            value={name}
            onChange={handleChange}
            />
            
            {/* Validation condition */}
            {
                name.length > 0 && (
                    name.length < 5 ? (
                    <p>Username must be atleast 5 characters</p>
                ) : (
                    <p>Usernmae is validated</p>
                )
                )
            }
        </div>
    </div>
  )
}

export default UsernameValidation
