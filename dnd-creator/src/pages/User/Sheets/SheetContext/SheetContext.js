import React, { createContext, useState, useContext } from 'react';
import { addSheetToPlayer } from '../../../../services/UserMethods';

const SheetContext = createContext();

export const useSheets = () => useContext(SheetContext);

export const SheetProvider = ({ children }) => {
  const [sheets, setSheets] = useState(JSON.parse(localStorage.getItem('sheets')) || []);

  const addSheet = (sheet) => {
    // const updatedSheets = [...sheets, sheet];
    addSheetToPlayer(JSON.parse(localStorage.getItem('loggedInUser'))._id, sheet._id);
    // localStorage.setItem('sheets', JSON.stringify(updatedSheets));
  };

  return (
    <SheetContext.Provider value={{ sheets, addSheet }}>
      {children}
    </SheetContext.Provider>
  );
};
