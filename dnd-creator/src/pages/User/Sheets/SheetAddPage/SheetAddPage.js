import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSheets } from '../SheetContext/SheetContext';
import './SheetAddPage.css';

const SheetAddPage = () => {
  const [sheetName, setSheetName] = useState('');
  const [players, setPlayers] = useState('');
  const [description, setDescription] = useState('');
  const { addSheet } = useSheets();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSheet = { sheetName, players, description };
    addSheet(newSheet);
    navigate('/user/sheets');
  };

  return (
    <div className="sheet-add-page">
      <main>
        <form id="create-sheet-form" onSubmit={handleSubmit}>
          <label htmlFor="sheet-name">Sheet Name:</label>
          <input
            type="text"
            id="sheet-name"
            name="sheet-name"
            placeholder="Placeholder"
            value={sheetName}
            onChange={(e) => setSheetName(e.target.value)}
          />

          <label htmlFor="players">Players:</label>
          <input
            type="text"
            id="players"
            name="players"
            placeholder="JohnDoe142, EpicUser11"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Sheet Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default SheetAddPage;
