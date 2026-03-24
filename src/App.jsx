import LinkedCounter from "./Tasks/LinkedCounter";
import UsernameValidation from "./Tasks/UsernameValidation";
import UniqueList from "./Tasks/UniqueList";
import EditTableList from "./Tasks/EditTableList";
import SearchBox from "./Tasks/SearchBox";
import Section from "./components/Section";
// import Parent from "./components2/Parent";
import Parent from "./components3/Parent";
import { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext();

function App() {

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
        <button onClick={toggleTheme} style={{cursor:"pointer"}}>Toggle Theme</button>
        <Section/>
      </themeContext.Provider> */}
      <Parent/>
    </>
  )
}

export default App
