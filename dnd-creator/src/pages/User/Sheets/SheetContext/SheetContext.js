import React, { createContext, useState, useContext } from 'react';

const SheetContext = createContext();

export const useSheets = () => useContext(SheetContext);

export const SheetProvider = ({ children }) => {
  const [sheets, setSheets] = useState(JSON.parse(localStorage.getItem('sheets')) || []);

  const addSheet = (sheet) => {
    const updatedSheets = [...sheets, sheet];
    setSheets(updatedSheets);
    localStorage.setItem('sheets', JSON.stringify(updatedSheets));
  };

  return (
    <SheetContext.Provider value={{ sheets, addSheet }}>
      {children}
    </SheetContext.Provider>
  );
};
