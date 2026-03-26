import React from 'react';
import { useContext } from 'react';
import { themeContext } from '../App';

function Display() {

    const {theme,userName,toggleTheme} = useContext(themeContext);

    const textStyle = {
        background : theme === "light"? "white":"black",
        color : theme === "light"? "black":"white"
    }

  return (
    <div>
      <div style={textStyle}>
        <h2>Theme</h2>
        <h3>{userName}</h3>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    
  )
}

export default Display