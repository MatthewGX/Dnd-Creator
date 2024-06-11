import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GroupAddPlayerPage.css';
import { getUserList } from '../../../../../services/UserMethods';
import { addPlayerToGroup } from '../../../../../services/GroupMethods';

const GroupAddPlayerPage = () => {
  const groupId = useParams().id;

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserBase().then(() => console.log(userList));
  }, []);

  const fetchUserBase = async () => {
    let userBase = await getUserList();

    userBase = userBase.filter(user => user._id != JSON.parse(localStorage.getItem('loggedInUser'))._id);

    setUserList(userBase);
    setSearchResults(userBase);
  } 

  const addToGroup = (user) => {
    addPlayerToGroup(groupId, user._id);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const results = mockPlayerSearch(e.target.value);
    setSearchResults(results);
  };

  const mockPlayerSearch = (query) => {
    // const players = ['JohnDoe142', 'EpicUser11', 'PlayerOne', 'GamerX'];
    return userList.filter(player => player.username.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div className="group-add-player-page">
      <main>
        <div className="search-container">
          <label htmlFor="player-search">Search for player to add:</label>
          <input
            type="text"
            id="player-search"
            name="player-search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="results-container">
            <p>Results:</p>
            <ul id="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((user, index) => (
                  <li key={index} onClick={() => addToGroup(user)}>{user.username}</li>
                ))
              ) : (
                <li>No results</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GroupAddPlayerPage;
