import LinkedCounter from "./Tasks/LinkedCounter";

import UsernameValidation from "./Tasks/UsernameValidation";

import UniqueList from "./Tasks/UniqueList";

import EditTableList from "./Tasks/EditTableList";

import SearchBox from "./Tasks/SearchBox";

import Section from "./deepData/Section";

import Parent from "./staticChild/Parent";

// import Parent from "./functionIssuse/Parent";

import DynamicForm from "./dynamicForm/DynamicForm";

import Login from "./accessControl/Login";
import Dashboard from "./accessControl/Dashboard";


import { useState } from "react";
import { createContext } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export const themeContext = createContext();

function App() {

  const [isLogged , setIsLogged] = useState(false);
  const[username,setUsername] = useState('');

  const userName ="Mahi";

  const [theme,setTheme] = useState("light");

  const toggleTheme = ()=>{
    setTheme((curr) => curr==="light" ? "dark":"light")
  }
  
  return (
    <>
      {/* <LinkedCounter/> */}
      {/* <UsernameValidation/> */}
      {/* <UniqueList/> */}
      {/* <EditTableList/> */}
      {/* <SearchBox/> */}
      {/* <themeContext.Provider value={{theme,toggleTheme,userName}}>
        <Section/>
      </themeContext.Provider> */}
      {/* <Parent/> */}
      {/* <DynamicForm/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login isLogged={isLogged} setIsLogged={setIsLogged} setUsername={setUsername}/> }/>
          <Route path="/dashboard" element={ <Dashboard isLogged={isLogged} setIsLogged={setIsLogged} username={username}/> }/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
