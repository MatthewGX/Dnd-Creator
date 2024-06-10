import React, { createContext, useState, useContext, useEffect } from 'react';

const GroupContext = createContext();

export const useGroups = () => useContext(GroupContext);

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/groups');
        if (!response.ok) {
          throw new Error('Failed to fetch groups');
        }
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);


  const addGroup = async (group) => {
    try {
      const response = await fetch('/api/groups/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(group),
      });

      if (!response.ok) {
        throw new Error('Error creating group');
      }
      
      const newGroup = await response.json();
      setGroups((prevGroups) => [...prevGroups, newGroup]);
    } catch (error) {
      console.error('Error adding group:', error);
      alert('There was a problem creating the group.');
    }

    //const updatedGroups = [...groups, group];
    //setGroups(updatedGroups);
    //localStorage.setItem('groups', JSON.stringify(updatedGroups));
  };

  return (
    <GroupContext.Provider value={{ groups, addGroup }}>
      {children}
    </GroupContext.Provider>
  );
};


