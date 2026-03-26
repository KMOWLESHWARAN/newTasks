import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({isLogged,setIsLogged,setUsername}) {

    const [users,setUsers] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setUsers((prev)=>({
            ...prev,
            [name]: value
        }))
    };
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isLogged){
            navigate('/dashboard')
        }
    },[isLogged,navigate]);
   
    const handleNavigate = (e)=>{
        e.preventDefault();
        
        if(users.name && users.email && users.password){
            setUsername(users.name);
            setIsLogged(true)
            navigate('/dashboard');
        }else{
            alert('Please fill all fields')
        }
    };

  return (
    <>
        <h1>Login Form</h1>
        <form action="" onSubmit={handleNavigate}>
            <div>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id='name' value={users.name} name='name' onChange={handleChange} required/>
                </div><br />

                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" id='email' name='email' value={users.email} onChange={handleChange} required/>
                </div><br />

                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" id='password' name='password' value={users.password} onChange={handleChange} minLength={7} required/>
                </div>
            </div><br />
                <button type='submit'>Login</button>
        </form>
    </>
  )
}

export default Login
