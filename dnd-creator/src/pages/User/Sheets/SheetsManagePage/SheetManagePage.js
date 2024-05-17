import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SheetManagePage.css';

const SheetManagePage = () => {
  const [activeTab, setActiveTab] = useState('players');
  const { id } = useParams();
  const tabs = ['players', 'sheets', 'roles'];

  const selectActive = (tabID) => {
    setActiveTab(tabID);
  };

  return (
    <div className="sheet-manage-page">
      <div className="outer-container">
        <div className="inner-container">
          <div className="col">
            <ul>
              {tabs.map((tabID) => (
                <li
                  key={tabID}
                  id={`${tabID}Tab`}
                  className={`screenTab ${activeTab === tabID ? 'active' : ''}`}
                >
                  <button onClick={() => selectActive(tabID)}>{tabID.charAt(0).toUpperCase() + tabID.slice(1)}</button>
                </li>
              ))}
            </ul>
          </div>
          <span id="info-screen" className="col">
            {tabs.map((tabID) => (
              <div key={tabID} id={tabID} className={`screen ${activeTab === tabID ? 'active' : ''}`}>
                <div className="inner-screen">
                  <h1>{tabID.charAt(0).toUpperCase() + tabID.slice(1)}</h1>
                  {tabID === 'players' && (
                    <div className="outer-sheet">
                      <ul className="inner-sheet">
                        <span id="sheet-container">
                          <li id='1' className="sheet-object"><h2>Player 1</h2></li>
                        </span>
                        <li id="add-player" className="sheet-object">
                          <Link to={`/user/sheets/sheet/${id}/add`}><button id="add-player-button"><h1>Add New Player</h1></button></Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SheetManagePage;
