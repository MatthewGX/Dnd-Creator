import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './GroupManagePage.css';
import './manage-pages/ManageStyles.css'
import GenericGroupContainer from '../../../../components/generic-container/group-container';
import Glossary from '../../../../components/glossary/Glossary';

const GroupManagePage2 = () => {

  const pages = { 'Players': 'players', 'Sheets': 'sheets'};

  return (
    <div className="group-manage-page">
      <div className="outer-container">
        <Glossary glossary={pages} />
      </div>
    </div>
  );
}


const GroupManagePage = () => {
  const [activeTab, setActiveTab] = useState('players');
  const { id } = useParams();
  const tabs = ['players', 'sheets', 'roles'];

  const selectActive = (tabID) => {
    setActiveTab(tabID);
  };

  return (
    <div className="group-manage-page">
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
                    <div className="outer-group">
                      <ul className="inner-group">
                        <span id="group-container">
                          <li id='1' className="group-object"><h2>Player 1</h2></li>
                        </span>
                        <li id="add-player" className="group-object">
                          <Link to={`/user/groups/group/${id}/add`}><button id="add-player-button"><h1>Add New Player</h1></button></Link>
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

export default GroupManagePage2;
