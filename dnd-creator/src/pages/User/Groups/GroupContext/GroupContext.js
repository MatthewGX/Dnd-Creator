import React, { createContext, useState, useContext, useEffect } from 'react';

const GroupContext = createContext();

export const useGroups = () => useContext(GroupContext);

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('http://localhost:4000/group');
        if (!response.ok) {
          throw new Error('Failed to fetch groups');
        }
        const data = await response.json();
        // setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);


  const addGroup = async (group) => {
    try {
      const response = await fetch('http://localhost:4000/group/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(group),
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        return await fetch('http://localhost:4000/user/add-group', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: JSON.parse(localStorage.getItem('loggedInUser'))._id,
            groupId: data._id
          }),
        })
      }
      
      if (!response.ok) {
        throw new Error('Error creating group');
      }
      // const newGroup = await response.json();
      // setGroups((prevGroups) => [...prevGroups, newGroup]);
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


