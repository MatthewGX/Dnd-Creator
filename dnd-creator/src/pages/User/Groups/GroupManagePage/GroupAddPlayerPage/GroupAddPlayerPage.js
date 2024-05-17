import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GroupAddPlayerPage.css';

const GroupAddPlayerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const results = mockPlayerSearch(e.target.value);
    setSearchResults(results);
  };

  const mockPlayerSearch = (query) => {
    const players = ['JohnDoe142', 'EpicUser11', 'PlayerOne', 'GamerX'];
    return players.filter(player => player.toLowerCase().includes(query.toLowerCase()));
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
                searchResults.map((result, index) => (
                  <li key={index}>{result}</li>
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
