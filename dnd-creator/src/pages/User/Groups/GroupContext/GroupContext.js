import React, { createContext, useState, useContext } from 'react';

const GroupContext = createContext();

export const useGroups = () => useContext(GroupContext);

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);

  const addGroup = (group) => {
    const updatedGroups = [...groups, group];
    setGroups(updatedGroups);
    localStorage.setItem('groups', JSON.stringify(updatedGroups));
  };

  return (
    <GroupContext.Provider value={{ groups, addGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
