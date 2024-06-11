import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserList, getUserSheets } from '../../../../../services/UserMethods';
import { addPlayerToGroup, addSheetToGroup } from '../../../../../services/GroupMethods';

const GroupAddSheetPage = () => {
  const groupId = useParams().id;

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetchCharacterSheets().then(() => console.log('test'));
  }, []);

  const fetchCharacterSheets = async () => {
    const sheetList = await getUserSheets();
    console.log(sheetList);
    setCharacterList(sheetList);
    setSearchResults(sheetList);
  }

  const addToGroup = (sheet) => {
    addSheetToGroup(groupId, sheet._id);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const results = mockPlayerSearch(e.target.value);
    setSearchResults(results);
  };

  const mockPlayerSearch = (query) => {
    return characterList.filter(sheet => sheet.name.toLowerCase().includes(query.toLowerCase()));
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
                searchResults.map((sheet, index) => (
                  <li key={index} onClick={() => addToGroup(sheet)}>{sheet.name}</li>
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

export default GroupAddSheetPage;
