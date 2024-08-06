import React, { useState, createContext } from 'react';
import '../Theme/form.css'
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null); 

const SwitchComponent = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <>
        <form className="theme-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Submit</button>
        </form>
        </>
      </div>
      <ReactSwitch  onChange={toggleTheme} checked={theme === 'dark'}/>
    </ThemeContext.Provider>
  );
};

export default SwitchComponent;
