import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard({isLogged,setIsLogged,username}) {
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLogged){
            navigate('/');
        }
    },[isLogged,navigate]);

    const handleLogout = ()=>{
        e.preventDefault();
        setIsLogged(false)
        navigate('/')
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <h2>Welcome {username}</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard